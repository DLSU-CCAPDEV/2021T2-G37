const { db } = require("mongodb");

const product_listingController = {

    getProduct_Listing: function (req, res) {
        var pnum = req.query.pNum;

        db.findOne('Product', {pNum: pnum}, function(result) {
            res.render('product_listing', result);
        });
    },

    getAddWishlist: function (req, res) {
        var product = {
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
            pDesc: pDesc,
            pColor: pColor,
            pSize: pSize,
            pImage: pImage
        }

        db.insertOneCallback('Wishlist', product, )
    },

    getAddCart: function (req, res) {

    }
}