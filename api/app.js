import express from "express";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT||3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
