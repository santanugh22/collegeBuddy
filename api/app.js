import express from "express";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from './routes/postRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import cors from "cors";
import dotenv from "dotenv";
import { readdir } from "fs/promises";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const PORT = process.env.PORT||3000;
const app = express();

app.use(express.json());
app.use(cors());


// auth routes here
app.use("/api/auth", authRoutes);

// post routes here
app.use('/api/posts',postRoutes)

// profile routes of the app
app.use('/api/profile',profileRoutes)

// question AI routes here
// app.use('/api/questionAi')
app.get('/',(req,res)=>{
  res.redirect('https://cbuddy.tech/')
})





app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
