import pg from "pg";
import dotenv from "dotenv";
dotenv.config();



var pool = new pg.Pool(
  {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    ssl:true

  }

);

export default pool;
