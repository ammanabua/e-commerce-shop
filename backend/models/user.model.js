const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 11
    },

}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);


module.exports = User;