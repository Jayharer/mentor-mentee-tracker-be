const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const Mentor = mongoose.model("Mentor", MentorSchema)
module.exports = Mentor
