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

    getViewProducts: function(req, res){
        db.findMany('Product', null, null, null, 15, 0, function(result) {
            res.render('viewproducts', {thumbnail: result});
        });        
    },

    getLoggedInViewProducts: function(req, res){
        var details = {};

        if(req.session.userName) {

            details.flag = true;
            details.userName = req.session.userName;
        
        }

        else {
          
            details.flag = false;
            db.findMany('Product', null, null, null, 15, 0, function(result) {
                res.render('viewproducts', result);
            });   
        }

        db.findMany('Product', null, null, null, 15, 0, function(result) {
            res.render('LoggedInViewProducts', {details: details, thumbnail: result});
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
        
        db.findMany('Product', {pName: { '$regex' : query, $options: 'i' }}, null, null, null, null, function(result) {    
            res.render('search', {query: query, thumbnail: result});
        });

    },

    getLoggedInSearch: function(req, res) {
        var query = req.query.fitem;
        var details = {};

        if(req.session.userName) {

            details.flag = true;
            details.userName = req.session.userName;
        }

        else {
          
            details.flag = false;
            db.findMany('Product', {pName: { '$regex' : query, $options: 'i' }}, null, null, null, null, function(result) {    
                res.render('search', {query: query, thumbnail: result});
            });    
        }

        db.findMany('Product', {pName: { '$regex' : query, $options: 'i' }}, null, null, null, null, function(result) {    
            res.render('LoggedInSearch', {details: details, query: query, thumbnail: result});
        });    
    

    }
}

module.exports = controller;