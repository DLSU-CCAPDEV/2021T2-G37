
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({

/*    name: {
        type: String,
        required: true
    },
    refno: {
        type: Number,
        required: true
    },
    amount: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    }
    */
});

module.exports = mongoose.model('Product', ProductSchema);
