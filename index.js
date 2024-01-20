const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;

const customerRoute = require('./route/CustomerRoute');


const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())


mongoose.connect('mongodb://127.0.0.1:27017/customer_crud').then(()=>{
    app.listen(port, ()=>{
        console.log(`api started ${port}`);
    })
});

// app.use('/',(req,resp,next)=>{
//     resp.send('<h1>Hi</h1>');
// })


app.use('/api/v1/customers', customerRoute)