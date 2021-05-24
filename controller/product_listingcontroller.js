const db = require('../models/db.js');

const product_listingController = {

    getProduct_Listing: function (req, res) {
        var pNum = req.params.pNum;

        db.findOne('Product', {pNum: pNum}, function(result) {
            res.render('product_listing', result);
        });
    },

    getAddWishlist: function (req, res) {
    //    var userName = req.query.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
        var pColor = req.query.pColor;
        var pSize = req.query.pSize;
        var pImage = req.query.pImage;
        
        console.log(pNum);

        var wish = {
        //    userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
    //        pColor: pColor,
    //        pSize: pSize,
    //        pImage: pImage
        }

        db.insertOne('Wishlist', wish);
    },

    getAddCart: function (req, res) {
    //   var userName = req.query.userName;

        
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
    //    var pColor = req.query.pColor;
    //    var pSize = req.query.pSize;
    //    var pImage = req.query.pImage;

        console.log(pNum);

        var item = {
    //        userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
    //        pColor: pColor,
    //        pSize: pSize,
    //        pImage: pImage
        }

        db.insertOne('Cart', item);
    },

    getCheckWishlist: function (req, res) {
        db.findOne('Wishlist', {userName: userName, pNum: pNum}, function(flag) {

        });
    },
}

module.exports = product_listingController;