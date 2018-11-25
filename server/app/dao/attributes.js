const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    created: Date,
    updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Attribute', AttributeSchema)
