const express = require('express');
const { rmSync } = require('fs');
const path = require('path');
const app = express()
const port = 5000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send(`<a href="https://www.saswat-barai.me">saswat-barai.me</a>`)
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,"./login.html"))// Serve login.html
  });

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})  