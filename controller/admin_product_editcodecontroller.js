const db = require('../models/db.js');

const adminprodeditcodeController = {
    getAdminProdCode: function (req, res) {
        res.render('admin_product_code');
    },

    /*
    getAdminProdEdit: function (req, res) {
        var pNum = req.params.pNum;

        console.log("success2");
        db.findOne('Product', {pNum: pNum}, function(result){
            if(result){
                //db.deleteOne('Product', {pNum: pNum});
                //res.redirect('/admin_home_page');
                var details = {
                    pNum: result.pNum,
                    pName: result.pName
                };
                console.log("success3");
                res.render('admin_product_edit', details);
                //res.redirect(307, 'editproduct/' + pNum);
            }
            else{
                res.send("Product Number does not exist.");
            }

        });
    },
*/
    postCodeProd: function (req, res) {
        var pNum = req.body.pnum;

        console.log("hey " + pNum);
        db.findOne('Product', {pNum: pNum}, function(result){
            if(result){
                res.redirect(307, 'editproduct/' + pNum);
            }
            else{
                res.send("Product Number does not exist.");
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