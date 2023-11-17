import express from 'express'
import authRoute from './routes/authRoute.js'
import serverless from 'serverless-http'
import cors from 'cors'

const api=express()

api.use(express.json())
api.use(cors)

api.use('/api/',authRoute)


app.get('/',(req,res)=>{
  res.send("You are good to go ")
})







export const handler=serverless(app)

