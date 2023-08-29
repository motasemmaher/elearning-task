const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tagsId: [{
        type: ObjectId
    }]
});

module.exports = mongoose.model('course', Course);