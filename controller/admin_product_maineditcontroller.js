const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Product = require('../models/ProductSchema.js');

const maineditprodController = {
    getAdminProdMainEdit: function (req, res) {
        var userName = req.params.userName;
        var details = {
            userName: userName
        }
        res.render('admin_product_edit', details);
    },

    postAdminProdMainEdit: function (req, res) {
        var pNum = req.body.pnum;
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
            }

            res.render("review_success", details);
        }
        else {
            var pNum = req.body.pnum;
            var pName = req.body.pname;
            var pPrice = req.body.pprice;
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

                    // checks if size, color, and image values were blank since they are optional. If blank, then it keeps the old value
                    if(pColor1 == "")
                        pColor1 = result.pColor1;
                    if(pColor2 == "")
                        pColor2 = result.pColor2;
                    if(pColor3 == "")
                        pColor3 = result.pColor3;
                    if(pColor4 == "")
                        pColor4 = result.pColor4;

                    if(pSize1 == "")
                        pSize1 = result.pSize1;
                    if(pSize2 == "")
                        pSize2 = result.pSize2;
                    if(pSize3 == "")
                        pSize3 = result.pSize3;
                    if(pSize4 == "")
                        pSize4 = result.pSize4;

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
                        userName: req.params.userName,
                        action: "was edited successfully."
                    }
                    res.render("admin_success", details);
                }
            });
        }
    },

    getEditCodeMainProd: function (req, res) {
        var pNum = req.query.pNum;

        db.findOne('Product', {pNum: pNum}, function (result) {
            res.send(result);
        });
    } 
 
}

module.exports = maineditprodController;