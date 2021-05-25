const db = require('../models/db.js');

const viewAllReviews = {
    getViewAllReviews: function (req, res) {
        var pNum = req.params.pNum;

        db.findMany('Review', {pNum: pNum}, null, null, null, null, function(result) {
            res.render('all_reviews', {review: result});
        });
    },

}

module.exports = viewAllReviews;