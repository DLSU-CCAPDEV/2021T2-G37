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
        var qtySold = "0";
        var pDesc = req.body.pdesc;
        var pColor1 = req.body.pcolor1; 
        var pColor2 = req.body.pcolor2; 
        var pColor3 = req.body.pcolor3; 
        var pColor4 = req.body.pcolor4;          
        var pSize1 = req.body.psize1;    
        var pSize2 = req.body.psize2; 
        var pSize3 = req.body.psize3; 
        var pSize4 = req.body.psize4;         
        var pImage1 = req.body.pimage1;         
        var pImage2 = req.body.pimage2;
        var pImage3 = req.body.pimage3;
        var pImage4 = req.body.pimage4;

        var product = {
            pNum: pNum,
            pName: pName,
            pPrice: pPrice,
            pQty: pQty,
            qtySold: qtySold,
            pDesc: pDesc,
            pColor1: pColor1,
            pColor2: pColor2,
            pColor3: pColor3,
            pColor4: pColor4,
            pSize1: pSize1,
            pSize2: pSize2,
            pSize3: pSize3,
            pSize4: pSize4,
            pImage1: pImage1,
            pImage2: pImage2,
            pImage3: pImage3,
            pImage4: pImage4
        }

        db.insertOneCallback('Product', product, function(flag) {
            if(flag) { // not yet done
                var details = {
                    pNum: pNum,
                    action: "was added successfully."
                }
                res.render("admin_success", details);
            }
            else{
                var details = {
                    pNum: pNum,
                    action: "was not added successfully."
                }
                res.render("admin_success", details);
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