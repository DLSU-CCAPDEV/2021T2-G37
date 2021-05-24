const db = require('../models/db.js');

const controller = {
    getHome: function(req, res){
        // display first 5 products in the database
        db.findMany('Product', null, null, null, 5, 0, function(result) {
            res.render('home', {thumbnail: result});
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
        res.render('admin_home_page');
    },

    getAdminLoginPage: function(req, res){
        res.render('admin_login');
    },

    getCart: function(req, res){
        db.findMany('Cart', null, null, null, null, null, function(result) {
            res.render('cart', {item: result});
        });
    },

    getViewProducts: function(req, res){
        db.findMany('Product', null, null, null, 15, 0, function(result) {
            res.render('viewproducts', {thumbnail: result});
        });
    },

    getCheckoutPage: function(req, res) {
        res.render('checkoutpage');
    },

    getHomeLoggedIn: function(req, res) {
        res.render('LoggedInHome');
    },

    getAdminHomeLoggedIn: function(req, res){
        res.render('admin_home');
    },

    getSearch: function(req, res){
        var query = req.query.fitem;
        console.log(query);
        
        db.findMany('Product', {pName: query}, null, null, null, null, function(result) {    
            res.render('search', {thumbnail: result});
        });

    }
}

module.exports = controller;