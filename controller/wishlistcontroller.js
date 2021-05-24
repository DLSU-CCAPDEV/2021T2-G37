const db = require('../models/db.js');

const wishController = {
    getWishlist: function(req, res){
        db.findMany('Wishlist', null, null, null, null, null, function(result) {
            res.render('wishlist', {wish: result});
        });
    },

    getAddAlltoCart: function (req, res) {
        db.findMany('Wishlist', null, null, null, null, null, function(result) {
            db.insertMany('Cart', result);
        });
    },

    getAddtoCart: function (req, res) {
        var pNum = req.query.pNum;

        var item = {
            pNum: pNum
        }

        db.insertOne('Cart', item);
    },

    getDeleteWish: function (req, res) {
        var pNum = req.query.pNum;

        var item = {
            pNum: pNum
        }

        db.deleteOne('Wishlist', item);
    }
}

module.exports = wishController;