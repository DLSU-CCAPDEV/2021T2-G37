const db = require('../models/db.js');

const cartController = {
    getCart: function(req, res){
        var userName = req.params.userName;
        db.findMany('Cart', {userName: userName}, null, null, null, null, function(result) {
            res.render('cart', {item: result});
        });
    }
}

module.exports = cartController;