import { Router } from "express";
import { emailIdVerifier } from "../utils/RegexEmail.js";
import { registerController ,loginController,updatePassword,allUsers} from "../controllers/authController.js";
const router = Router();

router.post("register",registerController);
router.post("login",loginController)
router.post("updatePass",updatePassword)
router.get("getALL",allUsers)

export default router;
