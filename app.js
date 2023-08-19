const express =require('express');
const body_parser = require('body-parser');
const UserRouter =require('./routers/user.router')
const app = express();
// const Usermodel = require('./model/users.model')


app.use(body_parser.json());  
app.use('/',UserRouter);

module.exports= app;


 

