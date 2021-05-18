const db = require('../models/db.js');

const adminproddeleteController = {
    getAdminProdDelete: function (req, res) {
        res.render('admin_product_delete');
    },

    postDeleteProd: function (req, res) {
        var pNum = req.query.pnum;

        db.deleteOne('Product', pNum);
    },

    // not yet working
    // check if product number already exists in db
    getCheckNum: function (req, res) {
        var pNum = req.query.pNum;

        db.findOne('Product', {pNum: pNum}, 'pNum', function (result) {
            res.send(result);
        });
    } 
}

module.exports = adminproddeleteController;