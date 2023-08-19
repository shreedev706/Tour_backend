const mongoose =require("mongoose")
const connection =mongoose.createConnection('mongodb://localhost:27017/TourDb').on('open',()=>{
    console.log("mongodb is connected")
}).on('error',()=>{console.log("error in connection")})

module.exports =connection;