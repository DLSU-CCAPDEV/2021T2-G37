const db = require('../models/db.js');
var content = document.getElementById("content");

const searchController = {

    getSearch: function(req, res){
        res.render('search');
    }, 
    
    getSearchQuery: function(req, res) {
        var query = req.query.;

        db.findMany('Products', query, function(result) {
            if(result != null) {
                for(var i = 0; i < result.length; i++) {
                    var prod = {
                        // image
                        pName: result.pName,
                        pPrice: result.pPrice
                    }


                }

                // render `../views/profile.hbs`
                res.render('profile', details);
            }
            /*
                if the user does not exist in the database
                render the error page
            */
            else {
                // render `../views/error.hbs`
                res.render('error');
            }
        });
    }
}

module.exports = searchController;