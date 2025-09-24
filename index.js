require("dotenv").config() // 환경변수
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8080

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB 연결 완료')).catch((error)=>console.log("MongoDB와 연결에 실패했습니다.",error))
    
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT} <- 클릭`)
})

app.get('/', (req,res)=>{
    res.send('hello')
})


