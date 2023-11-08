import express from 'express'
import authRoute from './routes/authRoute.js'

const app=express()

app.use(express.json())

app.use('/api',authRoute)

app.listen(3000,()=>{
    console.log("The server is running in the front")
})