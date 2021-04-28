const db = require('../models/db.js');


const homeController = {

    getHome: function(req, res){
        res.render('home');
    }, 
    
}

module.exports = homeController;