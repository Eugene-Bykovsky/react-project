const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    title: { type: String, required: true },
    imageSrc: { type: String },
    description: { type: String, required: true },
    text: { type: String },
    categories: { type: Array },
},
    {versionKey: false})

module.exports = model('Article', schema)