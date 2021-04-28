const db = require('../models/db.js');

const adminprodaddController = {
    getAdminProdAdd: function (req, res) {
        res.render('admin_product_add');
    },

    getAddProd: function (req, res) {
        var pNum = req.query.pnum;
        var pName = req.query.pname;
        var pPrice = req.query.pprice;
        var pQuantity = req.query.pquantity;
        var pDescription = req.query.pdetails;
        var pColor = req.query.pcolor;          // not sure yet; array(?)
        var pSize = req.query.psize;            // not sure yet; array(?)
        var pImage = req.query.pimage;          // not sure yet

        var product = {
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQuantity: pQuantity,
            pDescription: pDescription,
            pColor: pColor,
            pSize: pSize,
            pImage: pImage
        }

        db.insertOne('Products', product, function(flag) {
            if(flag) {
                alert("Successfully added " + pNum);
            }
        });
    },

    // check if product number already exists in db
    getCheckNum: function (req, res) {
        var pNum = req.query.pnum;

        db.findOne('Product', {pNum: pNum}, 'pNum', function (result) {
            res.send(result);
        });
    }    
}

module.exports = adminprodaddController;