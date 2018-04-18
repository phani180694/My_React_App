var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signUpSchema = new Schema({
    name : String,
    mobileNumber : String,
    email : String,
    password : String,
    confirmPassword : String,
})

module.exports = mongoose.model('ReactApp', signUpSchema)