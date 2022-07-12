const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: String,
    socketId: String,
    color: String,
    isReady: Boolean
});

const problemSchema = new Schema({
    contestId: Number,
    name: String,
    rating: Number,
    index: String,
    userSolved: {
        type: String,
        default: ""
    }
});

const roomSchema = new Schema({
    roomId: String,
    roomSize: {
        type: Number,
        default: 2
    },
    users: [userSchema],
    problemData: [problemSchema],
    duration: Number
});

// rooms - collection
const Room = mongoose.model('room', roomSchema);
module.exports = Room;
