const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

const app = express();

//Middlewares (runs when a specific route is hit)
// app.use('/posts', () =>{
//   console.log('middleware');
// })

//body parser
app.use(bodyParser.json());

//Import Routes
const route = require('./routes/route')
app.use('/', route);

//connect to database
const connectDB = require('./server/conn');
connectDB();

app.listen(3000, ()=>{
  console.log(`Listening on http://localhost:3000/`);
});