import pool from "../db/Connection.js";
import bcrypt from "bcrypt";
import { jwtGenerator, jwtVerifier } from "../utils/jwtGenerator.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // lets check if the user exist or not in the table
    const user = await pool.query(
      `SELECT * FROM users_basic WHERE email=$1 AND password=$2`,
      [email, password]
    );
    if (user.rows[0].length==0) {
      res.status(403).json("User doesn't exist");
    } else {
      const user_new = user.rows[0];

      const jwtToken = await jwtGenerator(
        user_new.user_id,
        user_new.email,
        user_new.first_name,
        user_new.last_name
      );

      res.status(200).json(jwtToken);
    }
  } catch (error) {
    res.status(error.status).json(error);
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
      const user = await pool.query(
        "INSERT INTO users_basic (first_name,last_name,email,password) Values ($1,$2,$3,$4)RETURNING *",
        [first_name, last_name, email, password]
      );
      const user_new = user.rows[0];

      const jwtToken = await jwtGenerator(
        user_new.user_id,
        user_new.email,
        user_new.first_name,
        user_new.last_name
      );

      res.status(200).json(jwtToken);
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

export const allUsers =
  ("/",
  async (req, res) => {
    try {
      const users = await pool.query(`SELECT * FROM users_basic`);

      res.status(200).json(users.rows);
    } catch (error) {
      console.log(error);
    }
  });
