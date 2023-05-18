const mongoose = require('mongoose');

// User Schema
const UsersSchema = mongoose.Schema({

    username: {
       type: String,
       required: true  
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});


const UsersModel = mongoose.model('users', UsersSchema);

module.exports = UsersModel;