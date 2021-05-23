
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    pNum: {
        type: Number,
        required: true
    },
    pName: {
        type: String,
        required: true
    },
    pPrice: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    pDesc: {
        type: String,
        required: true
    },
    pColor: {
        type: String,
        required: true
    },
    pSize: {
        type: String,
        required: true
    },
    pImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);
