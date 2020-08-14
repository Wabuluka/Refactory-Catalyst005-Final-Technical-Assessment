const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
    surname: String,
    givenname: String,
    dob: Date,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String
})

module.exports = mongoose.model('Registration', RegistrationSchema);