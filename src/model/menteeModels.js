const mongoose = require("mongoose");

const MenteeSchema = new mongoose.Schema({
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

const Mentee = mongoose.model("Mentee", MenteeSchema)
module.exports = Mentee
