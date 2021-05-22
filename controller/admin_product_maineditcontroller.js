const db = require('../models/db.js');

const maineditprodController = {
    getAdminProdEdit: function (req, res) {
        res.render('admin_product_edit');
    },
 
}

module.exports = maineditprodController;