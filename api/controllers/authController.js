import pool from "../db/Connection.js";
import bcrypt, { hash } from "bcrypt";
import { jwtGenerator, jwtVerifier } from "../utils/jwtGenerator.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // lets check if the user exist or not in the table
    const user = await pool.query(`SELECT * FROM users_basic WHERE email=$1`, [
      email,
    ]);
  


    if (!user.rows[0]) {
      res.status(403).json("User doesn't exist");
    } else {
        const {
          user_id,
          password: password_from_db,
          email: email_from_db,
          first_name,
          last_name,
        } = user.rows[0];
      const final_check = await bcrypt.compare(password, password_from_db);

      if (!final_check) {
        res.status(403).json("UserId or Password doesn't match");
      } else {
        const token = await jwtGenerator(
          user_id,
          email_from_db,
          first_name,
          last_name
        );
        const resp={
          user_id,token
        }

        res.status(200).json(resp);
      }
    }
  } catch (error) {
    res.status(501).json(error);
  }
};

export const registerController = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // check if the user already exist
    const userCheck = await pool.query(
      "SELECT * FROM users_basic WHERE first_name=$1 and email=$2",
      [first_name, email]
    );
    if (userCheck.rows[0]) {
      res.status(200).json("User already exists");
    } else {
      // lets encrypt the password
      const salt = await bcrypt.genSalt(5);
      const encrpytedPass = await bcrypt.hash(password, salt);
      const user = await pool.query(
        "INSERT INTO users_basic (first_name,last_name,email,password) Values ($1,$2,$3,$4)RETURNING *",
        [first_name, last_name, email, encrpytedPass]
      );
      const user_new = user.rows[0];
      const user_id=user_new.user_id


      const token = await jwtGenerator(
        user_new.user_id,
        user_new.email,
        user_new.first_name,
        user_new.last_name
      );
      const resp={
        user_id,token


      }

      res.status(200).json(resp);
    }
  } catch (error) {
    res.status(403).json(error);
  }
};

export const updatePassword = async (req, res) => {
  try {
    // check if the user actually exist
    const { username, password, newpassword } = req.body;
    const user = await pool.query(
      "SELECT username FROM users WHERE username=$1 AND password=$2",
      [username, password]
    );
    if (user.rows[0]) {
      const updatePass = await pool.query(
        "UPDATE users SET password=$1 WHERE username=$2 AND password=$3 RETURNING *",
        [newpassword, username, password]
      );
      if (updatePass.rows[0]) {
        res.status(200).json("Success");
      } else {
        res.status(300).json("Failed");
      }
    } else {
      res.status(403).json("U are not allowed to do this");
    }
  } catch (error) {}
};


export const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await jwtVerifier(token);
    const { user_id, user_email } = user;
    const verify_user = await pool.query(
      "SELECT user_id FROM users_basic WHERE email=$1 and user_id=$2",
      [user_email, user_id]
    );

    const resp = verify_user.rows[0];
    if (!resp) {
      res.status(403).json(user);
    } else {
      res.status(200).json(true);
    }
  } catch (error) {
    res.status(501).json(error);
  }
};
export const getUserDetails=async(req,res)=>{

  

  try {

     const { id:user_id } = req.params;
     const {token}=req.body
     const user = await jwtVerifier(token);

     const user_details = await pool.query(
       "SELECT user_id,email,profile_photo,first_name,last_name FROM users_basic WHERE user_id=$1",
       [user_id]
     );




     const resp = user_details.rows[0];

     if (!resp && !user) {
       res.status(403).json("Some error has occured");
     } else {
       res.status(200).json(resp);
     }
    
  } catch (error) {
    res.status(510).json(error);
    // console.log(req.body)
    
  }


}