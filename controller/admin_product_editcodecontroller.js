const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Product = require('../models/ProductSchema.js');

const adminprodeditcodeController = {
    getAdminProdCode: function (req, res) {
        var userName = req.params.userName;
        var details = {
            userName: userName
        }
        res.render('admin_product_code', details);
    },

    postCodeProd: function (req, res) {
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
            }

            res.render('admin_product_code', details);
        }
        else{
            var pNum = req.body.pnum;

            db.findOne('Product', {pNum: pNum}, function(result){
                if(result){
                    var product = {
                        userName: req.params.userName,
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
    
                    res.render('admin_product_edit', product);
                }
    
            });
        }

    },

    getEditCodeProd: function (req, res) {
        var pNum = req.query.pNum;

        db.findOne('Product', {pNum: pNum}, function (result) {
            res.send(result);
        });
    } 
}

module.exports = adminprodeditcodeController;