const mongoose = require("mongoose");

const BatchSchema = new mongoose.Schema({
    startdate: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const Batch = mongoose.model("Batch", BatchSchema)
module.exports = Batch
