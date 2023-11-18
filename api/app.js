import express from "express";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from './routes/postRoutes.js'
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT||3000;
const app = express();

app.use(express.json());
app.use(cors());


// auth routes here
app.use("/api/auth", authRoutes);

// post routes here
app.use('/api/posts',postRoutes)

// question AI routes here
// app.use('/api/questionAi')



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
