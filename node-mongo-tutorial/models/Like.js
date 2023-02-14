const mongoose = require("mongoose")

const schema = mongoose.Schema({
    like: String,
    created_on: String,
})

module.exports = mongoose.model("Like", schema)