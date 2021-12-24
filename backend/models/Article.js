const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    title: {type: String, required: true},
    imageSrc: {type: String, unique: true},
    description: {type: String, required: true},
    text: {type: String},
    private: {type: Boolean},
    best: {type: Boolean},
})

module.exports = model('Article', schema)