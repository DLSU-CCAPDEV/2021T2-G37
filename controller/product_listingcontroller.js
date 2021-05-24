const db = require('../models/db.js');

const product_listingController = {

    getProduct_Listing: function (req, res) {
        var pNum = req.params.pNum;
        var details = {};

        if(req.session.userName) {

            details.flag = true;
            db.findOne('Product', {pNum: pNum}, function(result) {
                details.userName = req.session.userName;
                details.pPrice = result.pPrice;
                details.pDesc = result.pDesc;
                details.pNum = result.pNum;
                details.pName = result.pName; 
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

                res.render('product_listing', details);
                
                
  /*              {
                    details: details,
                    pPrice: result.pPrice, 
                    pDesc: result.pDesc, 
                    pNum: result.pNum, 
                    pName: result.pName, 
                    pColor1: result.pColor1, 
                    pColor2: result.pColor2, 
                    pColor3: result.pColor3, 
                    pColor4: result.pColor4, 
                    pSize1: result.pSize1, 
                    pSize2: result.pSize2, 
                    pSize3: result.pSize3, 
                    pSize4: result.pSize4, 
                    pImage1: result.pImage1, 
                    pImage2: result.pImage2, 
                    pImage3: result.pImage3, 
                    pImage4: result.pImage4
                    
                }); */
            });
        }
        //{details: details, pName: result.pName, pPrice: result.pPrice, pDesc: result.pDesc, pNum: result.pNum, pColor1: result.pColor1, pColor2: result.pColor2, pColor3: result.pColor3, pColor4: result.pColor4, pSize1: result.pSize1, pSize2: result.pSize2, pSize3: result.pSize3, pSize4: result.pSize4, pImage1: result.pImage1, pImage2: result.pImage2, pImage3: result.pImage3, pImage4: pImage4}

        else {
          
            details.flag = false;

            db.findOne('Product', {pNum: pNum}, function(result) {
                res.render('product_listing', result);
            });
            
        }
    },

    getAddWishlist: function (req, res) {
        var userName = req.session.userName;
        var pNum = req.query.pNum;
        var pName = req.query.pName;
        var pPrice = req.query.pPrice;
        var pQty = req.query.pQty;
        var pColor = req.query.pColor;
        var pSize = req.query.pSize;
        var pImage = req.query.pImage;
        
        console.log(pNum);

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

        console.log(pNum);

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