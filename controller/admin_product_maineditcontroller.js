const db = require('../models/db.js');

const maineditprodController = {
    getAdminProdMainEdit: function (req, res) {
        res.render('admin_product_edit');
    },

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

    postAdminProdMainEdit: function (req, res) {
        var pNum = req.body.pnum;
        var pName = req.body.pname;
        var pPrice = req.body.pprice;
        var pQty = req.body.pqty;
        var qtySold = req.body.qtySold;
        var pDesc = req.body.pdesc;
        var pColor1 = req.body.pcolor1; 
        var pColor2 = req.body.pcolor2; 
        var pColor3 = req.body.pcolor3; 
        var pColor4 = req.body.pcolor4;          
        var pSize1 = req.body.psize1;    
        var pSize2 = req.body.psize2; 
        var pSize3 = req.body.psize3; 
        var pSize4 = req.body.psize4;         
        var pImage1 = req.body.pimage1;          
        var pImage2 = req.body.pimage2;
        var pImage3 = req.body.pimage3;
        var pImage4 = req.body.pimage4;

        db.findOne('Product', {pNum: pNum}, function(result){
            if(result){

                // checks if no image was re-uploaded. If none, then it keeps the old file
                if(pImage1 == "")
                    pImage1 = result.pImage1;
                if(pImage2 == "")
                    pImage2 = result.pImage2;
                if(pImage3 == "")
                    pImage3 = result.pImage3;
                if(pImage4 == "")
                    pImage4 = result.pImage4;

                //updates the db
                db.updateOne('Product', 
                    {pNum: pNum},
                    {
                        $set: {
                            pName: pName,
                            pPrice: pPrice,
                            pQty: pQty,
                            qtySold: qtySold,
                            pDesc: pDesc,
                            pColor1: pColor1,
                            pColor2: pColor2,
                            pColor3: pColor3,
                            pColor4: pColor4,
                            pSize1: pSize1,
                            pSize2: pSize2,
                            pSize3: pSize3,
                            pSize4: pSize4,
                            pImage1: pImage1,
                            pImage2: pImage2,
                            pImage3: pImage3,
                            pImage4: pImage4
                        }
                    });

                var details = {
                    pNum: pNum,
                    action: "was edited successfully."
                }
                res.render("admin_success", details);
            }
            else{
                var details = {
                    pNum: pNum,
                    action: "was not edited successfully."
                }
                res.render("admin_success", details);
            }
        });
    },
 
}

module.exports = maineditprodController;