

export const emailIdVerifier=(req,res,next)=>{
    var {email}=req.body
    

    var emailFormat =
      /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

      if(email!==emailFormat){
        res.status(303).json("Email is not corect ")
      }
      else{
        next()
      }





     

}