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
            res.render("login");
        }

        db.findMany('Cart', {userName: userName}, null, null, null, null, function(result) {
            var item = {
                pNum: result.pNum,
                pName: result.pName,
                pPrice: result.pPrice,
                pSize: result.pSize,
                pColor: result.pColor,
                pQty: result.pQty
            }
            
            res.render('cart', {details: details, item: item});
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