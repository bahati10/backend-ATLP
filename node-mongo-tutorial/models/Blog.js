const { type } = require("@hapi/joi/lib/base")
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: String,
    image: String,
    subtitle: String,
    content: String,
    Comment: Array,
    likes: Array,
    created_on: String,
})

module.exports = mongoose.model("Blog", schema)

