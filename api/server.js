import express from 'express'

const app=express()

app.use(express.static("web/public"));

app.listen(3000,()=>{
    console.log("The server is running in the front")
})