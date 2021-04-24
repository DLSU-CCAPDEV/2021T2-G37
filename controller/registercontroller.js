const db = require('../models/db.js');


const registerController = {

    getRegister: function(req, res){
        res.render('register');
    }, 

    postRegister: function(req, res) {

        var fullName = req.body.fullname;
        var userName = req.body.username;
        var email = req.body.email;
        var pw = req.body.password;
        var deladdr = req.body.deladdr;
        var contactnum = req.body.contactnum;

        var acc = {
            fullName: fullName, 
            userName: userName, 
            email:  email,
            pw: pw,
            deladdr: deladdr, 
            contactnum:  contactnum
        }
        
        db.insertOne('User', acc, function(flag){

            if (flag){
                res.redirect('/success?fullName=' + fullName + '&userName=' + userName);
            }
        });
    }
}

module.exports = registerController;