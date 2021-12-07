const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        default: 0,
    }
});

const User = mongoose.model("User", UserSchema)
module.exports = User