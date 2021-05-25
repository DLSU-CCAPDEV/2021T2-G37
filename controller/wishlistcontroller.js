const db = require('../models/db.js');

const wishController = {
    getWishlist: function(req, res){
        var details = {};
        var userName  = req.params.userName;

        if(req.session.userName) {
            details.flag = true;
            details.userName = req.params.userName;
        }

        else {
            details.flag = false;
            res.render('login');
        }

        db.findMany('Wishlist', {userName: userName}, null, null, null, null, function(result) {
            details.pNum = result.pNum;
            details.pName = result.pName;
            details.pImage = result.pImage;
            details.pPrice = result.pPrice;
            details.pColor = result.pColor;
            details.pQty = result.pQty;
 
            res.render('wishlist', {flag: details.flag, userName: details.userName, wish: result});
        });
    },

    getAddAlltoCart: function (req, res) {
        var userName = window.location.href.substring("http://localhost:3000/wishlist/".length);

        db.findMany('Wishlist', {userName: userName}, null, null, null, null, function(result) {
            db.insertMany('Cart', result);
        });
    },

    getAddtoCart: function (req, res) {
        var userName = req.query.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pImage = req.query.pImage;
        var pQty = req.query.pQty;

        var item = {
            userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pImage: pImage,
            pQty: pQty
        }

        db.insertOne('Cart', item);
    },

    getDeleteWish: function (req, res) {
        var username = req.query.userName;
        var pNum = req.query.pNum;

        var wish = {
            userName: username,
            pNum: pNum
        }

        db.deleteOne('Wishlist', wish);
    }
}

module.exports = wishController;