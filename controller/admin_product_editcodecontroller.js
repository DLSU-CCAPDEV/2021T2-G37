const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Product = require('../models/ProductSchema.js');

const adminprodeditcodeController = {
    getAdminProdCode: function (req, res) {
        res.render('admin_product_code');
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
                    res.redirect(307, 'editproduct/' + pNum);
                }
                else{
                    var details = {
                        pNum: pNum,
                        action: "does not exist."
                    }
                    res.render("admin_success", details);
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