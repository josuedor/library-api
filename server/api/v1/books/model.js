const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    author: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('book', schema)