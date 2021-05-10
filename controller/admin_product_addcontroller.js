const db = require('../models/db.js');

const adminprodaddController = {
    getAdminProdAdd: function (req, res) {
        res.render('admin_product_add');
    },

    postAddProd: function (req, res) {
        var pNum = req.body.pnum;
        var pName = req.body.pname;
        var pPrice = req.body.pprice;
        var pQty = req.body.pqty;
        var pDesc = req.body.pdesc;
        var pColor = req.body.pcolor;          // not sure yet; array(?)
        var pSize = req.body.psize;            // not sure yet; array(?)
        var pImage = req.body.pimage;          // not sure yet

        var product = {
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
            pDesc: pDesc,
            pColor: pColor,
            pSize: pSize,
            pImage: pImage
        }

        db.insertOneCallback('Product', product, function(flag) {
            if(flag) { // not yet done
                res.redirect('/success?pName=' + pName + '&pNum=' + pNum);
            }
        });
    },

    // check if product number already exists in db
    getCheckNum: function (req, res) {
        var pNum = req.query.pNum;

        db.findOne('Product', {pNum: pNum}, 'pNum', function (result) {
            res.send(result);
        });
    }    
}

module.exports = adminprodaddController;