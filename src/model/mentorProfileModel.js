const mongoose = require("mongoose");

const MentorProfileSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    experience: {
        type: String,
    },
    organization: {
        type: String,
    },
    techstacks: {
        type: String,
    },
    info: {
        type: String,
    }
});

const MentorProfile = mongoose.model("MentorProfile", MentorProfileSchema)
module.exports = MentorProfile
