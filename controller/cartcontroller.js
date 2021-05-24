const db = require('../models/db.js');

const cartController = {
    getCart: function(req, res){
        db.findMany('Cart', null, null, null, null, null, function(result) {
            res.render('cart', {item: result});
        });
    }
}

module.exports = cartController;