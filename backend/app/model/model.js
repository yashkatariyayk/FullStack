const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password:String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);