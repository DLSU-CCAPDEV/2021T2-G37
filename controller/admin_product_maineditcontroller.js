const db = require('../models/db.js');

const maineditprodController = {
    postAdminProdEdit: function (req, res) {
        var pNum = req.params.pNum;

        db.findOne('Product', {pNum: pNum}, function(result){
            if(result){
                var product = {
                    pNum: result.pNum,
                    pName: result.pName,
                    pPrice: result.pPrice,
                    pQty: result.pQty,
                    qtySold: result.qtySold,
                    pDesc: result.pDesc,
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
                }

                if(product.pImage1 == "")
                    product.pImage1 = "../images/noimage.jpg";
                if(product.pImage2 == "")
                    product.pImage2 = "../images/noimage.jpg";
                if(product.pImage3 == "")
                    product.pImage3 = "../images/noimage.jpg";
                if(product.pImage4 == "")
                    product.pImage4 = "../images/noimage.jpg";

                res.render('admin_product_edit', product);
            }
            else{
                res.send("Product Number does not exist.");
            }

        });
    },
 
}

module.exports = maineditprodController;