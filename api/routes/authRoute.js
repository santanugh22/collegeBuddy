import { Router } from "express";
import { emailIdVerifier } from "../utils/RegexEmail.js";
import { registerController ,loginController} from "../controllers/authController.js";
const router = Router();

router.post("/register",registerController);
router.post("/login",loginController)

export default router;
