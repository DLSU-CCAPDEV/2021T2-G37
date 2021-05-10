const { Db } = require("mongodb");
const db = require('../models/db.js');

const controller = {
    getHome: function(req, res){
        res.render('home');
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
        res.redirect('LoggedInHome')
    },

    setHome: function(req, res) {
        db.findAll('Products', function(result) {
            res.send(result);
        });
    }
}

module.exports = controller;