
var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    rNum: {
        type: Number,
        required: true
    },
    pNum: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    rating: {
        type: mongoose.Schema.Types.Decimal128,
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
