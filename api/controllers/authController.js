import pool from "../db/Connection.js";
export const loginController = async (req, res) => {
  try {
    const {username,password}=req.body


    // lets check if the user exist or not in the table 
    const user=await pool.query('SELECT username FROM users WHERE username=$1 AND password=$2',[username,password])
    if(!user){
      res.status(403).json("User doesn't Exist")
    }

    res.status(200).json("Logged in successfully")

    
  } catch (error) {
    res.status(400).json(error)
    
  }
};

export const registerController = async (req, res) => {
  try {
    const {username,email,password}=req.body

    // check if the user already exist 
    const userCheck=await pool.query("SELECT username FROM users WHERE username=$1 and email=$2",[username,email])
    if(userCheck.rows[0]){
      res.status(200).json("User already exists");
     
     

    }else{
        const user = await pool.query(
          "INSERT INTO users (username,password,email) Values ($1,$2,$3)RETURNING *",
          [username, password, email]
        );
        res.status(200).json(user.rows[0]);
      

    }
   
     
  
 

    
  } catch (error) {
    res.status(403).json(error);
  }
};



export const updatePassword=async(req,res)=>{
  try {
    // check if the user actually exist 
    const {username,password,newpassword}=req.body
    const user=await pool.query('SELECT username FROM users WHERE username=$1 AND password=$2',[username,password])
    if(user.rows[0]){
      const updatePass=await pool.query('UPDATE users SET password=$1 WHERE username=$2 AND password=$3 RETURNING *',[newpassword,username,password])
      if(updatePass.rows[0]){
        res.status(200).json("Success")
      }else{
        res.status(300).json("Failed")
      }

    }else{
      res.status(403).json("U are not allowed to do this")
    }



    
  } catch (error) {
    
  }
}
