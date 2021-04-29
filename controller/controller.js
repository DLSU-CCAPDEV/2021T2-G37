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

    getHomeRegistered: function(req, res) {
        res.render('homeregistered');
    }

    
}

module.exports = controller;