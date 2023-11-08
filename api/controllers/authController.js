import pool from "../db/Connection.js";
const loginController = async (req, res) => {};

export const registerController = async (req, res) => {
  try {
    const user=await pool.query('INSERT INTO users (username,password) Values ($1,$2,$3)',[req.body.username,req.body.password])
    if(user){
        console.log(user.rows[0])
    }
 

    res.status(200).json("meow")
  } catch (error) {
    res.status(403).json(error);
  }
};
