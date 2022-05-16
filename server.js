const express = require('express')
const signale = require('signale')
const dotenv = require('dotenv')
var cors = require('cors')
const api = require('./routes/api')
const path = require('path')


const connectDatabase = require('./database/controllers/connectDB');
//const path = require('path');



const PORT = process.env.PORT || 5500
const app = express()

app.use(cors()) // Use this after the variable declaration

// Cors used to allow cross-origin communication on localserver between frontend and backend
//app.use(cors());

// Initialize don env middleware
dotenv.config()



// Connect to mongoDB database
connectDatabase();



// MIDDLEWARES
app.use(express.json());

//  -  ROUTES  -
app.use('/api', api);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  } else {
    app.use('/', express.static(path.join(__dirname, 'public')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
  }




app.listen(PORT, ()=>{
    signale.success(`Server is running on port: ${PORT}`)
})

