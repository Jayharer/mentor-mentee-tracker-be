const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    mentorid: {
        type: String,
        required: true,
    },
    week: {
        type: String,
        required: true,
    },
    session: {
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
    datetime: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    ajanda: {
        type: String,
    },
    notes: {
        type: String,
    },
    feedback: {
        type: String,
    },
});

const Session = mongoose.model("Session", SessionSchema)
module.exports = Session