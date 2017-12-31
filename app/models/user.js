let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);