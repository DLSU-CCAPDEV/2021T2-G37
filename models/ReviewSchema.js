
var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    rNum: {
        type: String,
        required: true
    },
    pNum: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    rev: {
        type: String,
        required: true
    },
    img1: {
        type: String,
        required: true
    },
    img2: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Review', ReviewSchema);
