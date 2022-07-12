const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDataSchema = new Schema({
    username: String,
    handle: { type: String, default: ""}
})

const UserData = mongoose.model('userdata', userDataSchema);
module.exports = UserData;