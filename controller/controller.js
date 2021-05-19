const { Db } = require("mongodb");
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

    getWishlist: function(req, res){
        res.render('wishlist');
    },

    getCart: function(req, res){
        res.render('cart');
    },

    getViewProducts: function(req, res){
        res.render('viewproducts');
    },

    getHomeLoggedIn: function(req, res) {
        res.render('LoggedInHome');
    },

    getAdminHomeLoggedIn: function(req, res){
        res.render('admin_home');
    }
}

module.exports = controller;