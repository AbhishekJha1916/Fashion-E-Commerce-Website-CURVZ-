const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: Date,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;