const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    vorname: {
        type: String,
        require: true
    },
    nachname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    passwort: {
        type: String,
        require: true
    },
})

const User = mongoose.model('User',userSchema)

module.exports = User;