const db = require('../models/db.js');

const cartController = {
    getCart: function(req, res){
        db.findMany('Cart', null, null, null, null, null, function(result) {
            res.render('cart', {item: result});
        });
    },

    getDeleteItem: function(req, res) {
        var pNum = req.query.pNum;

        var item = {
            pNum: pNum
        }

        db.deleteOne('Cart', item);
    }
}

module.exports = cartController;