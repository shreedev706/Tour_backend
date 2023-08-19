const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true

    }
});

const UserModel =db.model('users', userSchema)

module.exports = UserModel;