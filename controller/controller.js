const db = require('../models/db.js');

const controller = {
    getHome: function(req, res){

        var details = {};

        if(req.session.userName) {

            details.flag = true;
            details.userName = req.session.userName;
        
        }

        else {
          
            details.flag = false;
        }

        db.findMany('Product', null, null, null, 5, 0, function(result) {
            details.pPrice = result.pPrice;
            details.pDesc = result.pDesc;
            details.pNum = result.pNum;
            details.pName = result.pName; 
            details.pColor1 = result.pColor1;
            details.pColor2 = result.pColor2; 
            details.pColor3 = result.pColor3; 
            details.pColor4 = result.pColor4; 
            details.pSize1 = result.pSize1;
            details.pSize2 = result.pSize2; 
            details.pSize3 = result.pSize3; 
            details.pSize4 = result.pSize4; 
            details.pImage1 = result.pImage1;
            details.pImage2 = result.pImage2; 
            details.pImage3 = result.pImage3; 
            details.pImage4 = result.pImage4;

            res.render('home', {flag: details.flag, userName: details.userName, thumbnail: result});
        });

    },

    getRegister: function(req, res){
        res.render('register');
    }, 

    getLogin: function(req, res){
        res.render('login');
    }, 

    getNoEditAcc: function(req, res){
        res.render('acctdetailsnoedit');
    },

    getAcctDetails: function(req, res){
        res.render('acctdetails');
    },

    getAdminHomePage: function(req, res){

        var query = {userName: req.params.userName};

        var details = {};

        if(req.session.userName){

            details.flag = true;
            details.userName = req.session.userName;

        }

        else 
            details.flag = false;
    

        db.findOne('Admin', query, function(result){

            if(result != null) {

                
                    details.userName = result.userName,
            
                //res.render('testing', details);
                res.render('admin_home_page', details);
            }

        });
                
        // res.render('admin_home_page', details);
    },

    getAdminLoginPage: function(req, res){
        res.render('admin_login');
    },

    getViewProducts: function(req, res){
        db.findMany('Product', null, null, null, 15, 0, function(result) {
            res.render('viewproducts', {thumbnail: result});
        });        
    },


    getCheckoutPage: function(req, res) {
        res.render('checkoutpage');
    },

    getAdminHomeLoggedIn: function(req, res){
        res.render('admin_home');
    },

    getSearch: function(req, res){
        var query = req.query.fitem;
        var details = {};

        if(req.session.userName){
            details.flag = true;
            details.userName = req.session.userName;
        }
        
        else {
            details.flag = false;
        }

        
        db.findMany('Product', {pName: { '$regex' : query, $options: 'i' }}, null, null, null, null, function(result) {    
            res.render('search', {flag: details.flag, userName: details.userName, query: query, thumbnail: result});
        });

    },

    getAbout: function (req, res) {
        res.render('about'); 
    }


}

module.exports = controller;