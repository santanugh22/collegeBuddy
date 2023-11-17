import express from 'express'
import authRoute from './routes/authRoute.js'
import cors from 'cors'
const PORT=3000

const app=express()

app.use(express.json())
app.use(cors)

app.use('/api/',authRoute)


app.get('/',(req,res)=>{
  res.send("You are good to go ")
})

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`)
})







