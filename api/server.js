import express from 'express'
import authRoute from './routes/authRoute.js'

const app=express()

app.use(express.json())

app.use('/api',authRoute)



const imageApiTest=async()=>{
    const url =
      "https://collegebuddy.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview";
    const data = {
      url: "https://management.ind.in/img/j/Question-paper-of-IIT-Delhi-1.jpg",
    };
    const res=await fetch(url,{method:'POST',headers:{
        "Content-Type":"application/json",
        "Ocp-Apim-Subscription-Key":"0ee75f5a73ff4d15a925105e126941fd"
    },
    body:JSON.stringify(data)
})

const text=await res.json()

console.log(text.readResult.content)
}

app.listen(3000,()=>{
    console.log("The server is running in the front")

})