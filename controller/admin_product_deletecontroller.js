const db = require('../models/db.js');

const adminproddeleteController = {
    getAdminProdDelete: function (req, res) {
        res.render('admin_product_delete');
    },

    postDeleteProd: function (req, res) {
        var pNum = req.body.pnum;

        db.findOne('Product', {pNum: pNum}, function(result){
            if(result){
                db.deleteOne('Product', {pNum: pNum});
                res.redirect('/admin_home_page');
            }

        });

    },

    // not yet working
    // check if product number already exists in db
    getCheckNumDelete: function (req, res) {
        var pNum = req.body.pnum;

        db.findOne('Product', {pNum: pNum}, function (result) {
            res.send(result);
        });
    } 
}

module.exports = adminproddeleteController;