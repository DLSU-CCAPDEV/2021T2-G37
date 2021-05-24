const db = require('../models/db.js');

const cartController = {
    getCart: function(req, res){
        var details = {};
        var userName = req.session.userName;
        
        if(userName != "") {
            details.flag = true;
            details.userName = req.session.userName;

            db.findMany('Cart', {userName: userName}, null, null, null, null, function(result) {
                res.render('cart', {details: details, item: result});
            });
        }

        else {
            details.flag = false;
            res.render("login");
        }

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