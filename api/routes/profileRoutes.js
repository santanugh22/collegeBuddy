import { Router } from "express";
import {ProfilePhotoUploader,ServingProfilePhoto} from '../controllers/profileController.js'
const router=Router()
import multer from "multer";

const uploadEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./storage/profilePhotos");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const uploadMiddleware = multer({ storage: uploadEngine });

// changing the profile photo 
router.post('/uploadProfilePhoto',uploadMiddleware.single("profilePhoto"),ProfilePhotoUploader)

// view profile photo
router.get('/profilephoto/:id',ServingProfilePhoto)


// changing the email
router.post('/changeEmail')


// changing 


export default router