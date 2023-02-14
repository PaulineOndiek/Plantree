const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    authority: { type: String, required: true },
    ownership: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    topography: { type: String, required: true },
    soil: { type: String, required: true }

})

module.exports = mongoose.model("Trees", treeSchema);