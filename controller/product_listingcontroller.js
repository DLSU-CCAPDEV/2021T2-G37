const { db } = require("mongodb");

const product_listingController = {

    getProduct_Listing: function (req, res) {
        var pnum = req.query.pNum;

        db.findOne('Product', {pNum: pnum}, function(result) {
            res.render('product_listing', result);
        });
    },

    getAddWishlist: function (req, res) {
        var userName = req.query.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
        var pColor = req.query.pColor;
        var pSize = req.query.pSize;
        var pImage = req.query.pImage;
        
        var wish = {
            userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
            pColor: pColor,
            pSize: pSize,
            pImage: pImage
        }

        db.insertOneCallback('Wishlist', wish);
    },

    getAddCart: function (req, res) {
        var userName = req.query.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
        var pColor = req.query.pColor;
        var pSize = req.query.pSize;
        var pImage = req.query.pImage;

        var item = {
            userName: userName,
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
            pColor: pColor,
            pSize: pSize,
            pImage: pImage
        }

        db.insertOneCallback('Cart', item);
    },

    getDeleteReview: function (req, res) {
        var pNum = req.query.pNum;
        var userName = req.query.userName;

        db.deleteOne(Transaction, {pNum: pNum, userName: userName}, function(flag) {
            if(flag) {
                console.log('Success');
            }
        });
    }
}

module.exports = product_listingController;