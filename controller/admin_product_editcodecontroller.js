const db = require('../models/db.js');

const adminprodeditcodeController = {
    getAdminProdCode: function (req, res) {
        res.render('admin_product_code');
    },

    postCodeProd: function (req, res) {
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

    },

    /*// not yet working
    // check if product number already exists in db
    getCheckNumDelete: function (req, res) {
        var pNum = req.body.pnum;

        db.findOne('Product', {pNum: pNum}, function (result) {
            res.send(result);
        });
    } */
}

module.exports = adminprodeditcodeController;