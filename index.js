require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kashi',(req,res)=>{
    res.send('kashifdotcom')
})

app.get('/login',(req,res)=>{
res.send('please login chai or code ')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
