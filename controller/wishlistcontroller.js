const db = require('../models/db.js');

const wishController = {
    getWishlist: function(req, res){
        var details = {};
        var query  = {userName: req.session.userName};

        if(req.session.userName) {
            details.flag = true;
            details.userName = req.session.userName;
        }

        else {
            details.flag = false;
            res.render('login');
        }

        db.findMany('Wishlist', query, null, null, null, null, function(result) {


            var wish = {
                pNum: result.pNum,
                pName: result.pName,
                pPrice: result.pPrice,
                pColor: result.pColor,
                pQty: result.pQty
            }
            
            res.render('wishlist', {details: details, wish: wish});
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
    },

    getCheckWish: function (req, res) {

        var userName = req.session.userName;

        db.findOne('Wishlist', {userName: userName}, null, null, null, null, function(result) {
            res.send(result);
        });
    }
}

module.exports = wishController;