const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    mentor: {
        type: String,
        required: true,
    },
    mentee: {
        type: Array,
        required: true,
    },
});

const Team = mongoose.model("Team", TeamSchema)
module.exports = Team
