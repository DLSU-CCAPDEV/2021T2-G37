const db = require('../models/db.js');

const cartController = {
    getCart: function(req, res){
        var details = {};
        var userName = req.session.userName;
        
        if(userName != "") {
            details.flag = true;
            details.userName = req.session.userName;
        }
        else {
            details.flag = false;
            res.render('login');
        }

        db.findMany('Cart', {userName: userName}, null, null, null, null, function(result) {
            details.pNum = result.pNum;
            details.pName = result.pName;
            details.pImage = result.pImage;
            details.pPrice = result.pPrice;
            details.pColor = result.pColor;
            details.pQty = result.pQty;
 
            res.render('cart', {flag: details.flag, userName: details.userName, item: result});
        });


    },

    getDeleteItem: function(req, res) {
        var pNum = req.query.pNum;

        var item = {
            pNum: pNum
        }

        db.deleteOne('Cart', item);
    }
}

module.exports = cartController;