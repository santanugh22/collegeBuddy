import jsonwebtoken from 'jsonwebtoken'
const jwt=jsonwebtoken
import dotenv from 'dotenv'
dotenv.config()
async function jwtGenerator(user_id,user_email,first_name,last_name){
    const data={
        user_email,user_id,first_name,last_name
    }
    return jwt.sign(data,process.env.JWT_PASS,{expiresIn:"2 days"})

}



async function jwtVerifier(token){
    const response=jwt.verify(token,process.env.JWT_PASS)
    return response
    

}


// here will come the refresh token sending capability

export {jwtGenerator,jwtVerifier}