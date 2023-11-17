import express from 'express'
import authRoute from './routes/authRoute.js'
import serverless from 'serverless-http'
import cors from 'cors'

const app=express()

app.use(express.json())
app.use(cors)

app.use('/api/',authRoute)


app.get('/',(req,res)=>{
  res.send("You are good to go ")
})







export const handler=serverless(app)

