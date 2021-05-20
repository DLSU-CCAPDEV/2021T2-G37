const { db } = require("mongodb");

const product_listingController = {

    getProduct_Listing (req, res) {
        var pnum = req.query.pNum;

        db.findOne('Product', {pNum: pnum}, function(result) {
            res.render('product_listing', result);
        });
    }
}