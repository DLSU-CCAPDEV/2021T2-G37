const { validationResult } = require('express-validator');
const db = require('../models/db.js');

const adminproddeleteController = {
    getAdminProdDelete: function (req, res) {
        var userName = req.params.userName;
        var details = {
            userName: userName
        }
        res.render('admin_product_delete', details);
    },

    postDeleteProd: function (req, res) {
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;
            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
;            }

            res.render('admin_product_delete', details);
        }

        else {
            var pNum = req.body.pnum;

            db.findOne('Product', {pNum: pNum}, function(result){
                if(result){
                    db.deleteOne('Product', {pNum: pNum});
                    var details = {
                        pNum: pNum,
                        userName: req.params.userName,
                        action: "was deleted successfully."
                    }
                    res.render("admin_success", details);
                }

            });
        }

    },

    // check if product number already exists in db
    getCheckNumDelete: function (req, res) {
        var pNum = req.query.pNum;

        db.findOne('Product', {pNum: pNum}, function (result) {
            res.send(result);
        });
    } 
}

module.exports = adminproddeleteController;