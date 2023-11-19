import pool from "../db/Connection.js";
import { jwtVerifier } from "../utils/jwtGenerator.js";
import { __dirname } from "../app.js";
import path from 'path'

// {
//   fieldname: 'profilePhoto',
//   originalname: 'sun_shiny.png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   destination: './storage/profilePhotos',
//   filename: '1700417178997--sun_shiny.png',
//   path: 'storage/profilePhotos/1700417178997--sun_shiny.png',
//   size: 24598
// }

export const ProfilePhotoUploader = async (req, res) => {
  try {
    const token=req.body.token
    const {user_id} = await jwtVerifier(token);
  

    const userSearch = await pool.query(
      "UPDATE users_basic SET profile_photo=$1 WHERE user_id=$2",
      [req.file.filename, user_id]
    );

    res.status(200).json("File uploaded successfully")
  } catch (error) {
    res.status(500).json("User is not valid !! SEcurity issue flagged");
  }
};


export const ServingProfilePhoto=async(req,res)=>{
    try {
        const image_id=req.params.id
        const pathName=path.join(__dirname+'/storage/profilePhotos/')
        const options={
            root:pathName
        }
        

        
        res.sendFile(image_id,options)
        
       
        
    } catch (error) {
        console.log(error)
        
    }
}
