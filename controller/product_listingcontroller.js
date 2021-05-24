const db = require('../models/db.js');

const product_listingController = {

    getProduct_Listing: function (req, res) {
        var pNum = req.params.pNum;
        var details = {};

        if(req.session.userName) {

            details.flag = true;
            details.userName = req.session.userName;

        }

        else {
          
            details.flag = false;
            
        }

        db.findOne('Product', {pNum: pNum}, function(result) {
            details.pNum = pNum;

            try {
                details.pName = result.pName;
                details.pPrice = result.pPrice;
                details.pDesc = result.pDesc;
                details.pColor1 = result.pColor1;
                details.pColor2 = result.pColor2; 
                details.pColor3 = result.pColor3; 
                details.pColor4 = result.pColor4; 
                details.pSize1 = result.pSize1;
                details.pSize2 = result.pSize2; 
                details.pSize3 = result.pSize3; 
                details.pSize4 = result.pSize4; 
                details.pImage1 = result.pImage1;
                details.pImage2 = result.pImage2; 
                details.pImage3 = result.pImage3; 
                details.pImage4 = result.pImage4;
            } catch {
                details = null;
            }

            

            res.render('product_listing', details);
        });
    },

    getAddWishlist: function (req, res) {
        var userName = req.session.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
    //    var pColor = req.query.pColor;
    //    var pSize = req.query.pSize;
    //    var pImage = req.query.pImage;
        
        var wish = {
            userName: userName,
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
        var userName = req.session.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
    //    var pColor = req.query.pColor;
    //    var pSize = req.query.pSize;
    //    var pImage = req.query.pImage;

        var item = {
            userName: userName,
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