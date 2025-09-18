const express = require('express')
const app = express()
const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT} <- 클릭`)
})

app.get('/', (req,res)=>{
    res.send('hello')
})

