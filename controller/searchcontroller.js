const db = require('../models/db.js');
//var content = document.getElementById("content");

const searchController = {

    getSearch: function(req, res){
        res.render('search');
    }, 
    
    getSearchQuery: function(req, res) {
        var query = req.query.Query;

    /*    db.findMany('Products', query, function(result) {
            if(result != null) {
                for(var i = 0; i < result.length; i++) {
                    var prod = {
                        // image
                        pName: result.pName,
                        pPrice: result.pPrice
                    }


                }

                res.render('search', details);
            }
            
            //    if the query does not match any product in the database
            
            else {

                res.render('error');
            }
        }); */
    }
}

module.exports = searchController;