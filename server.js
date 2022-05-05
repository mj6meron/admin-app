const express = require('express')
const signale = require('signale')
const api = require('./routes/api')
const path = require('path');


const PORT = process.env.PORT || 5500

const app = express()

// MIDDLEWARES
// app.use(express.static('public'))
app.use(express.json());

//  -  ROUTES  -
app.use('/api', api);

app.get('/', (req, res)=>{
    res.send('Hello from the server!')
})


app.listen(PORT, ()=>{
    signale.success(`Server is running on port: ${PORT}`)
})
