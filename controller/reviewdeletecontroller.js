const { validationResult } = require('express-validator');
const db = require('../models/db.js');

const reviewdeleteController = {
    getReviewDelete: function (req, res) {
        res.render('reviewdelete');
    },

    getReviewDeleteCode: function(req, res){
        res.render("reviewdelete");
    },

    postReviewDelete: function (req, res) {
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;
           // console.log("---------------");
            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
                //console.log("heeey " + errors[i].msg);
;            }

            res.render('reviewdelete', details);
        }

        else {
            var rNum = req.body.rnum;

            db.findOne('Review', {rNum: rNum}, function(result){
                if(result){
                    db.deleteOne('Review', {rNum: rNum});
                    var details = {
                        rNum: rNum,
                        action: "was deleted successfully."
                    }
                    res.render("review_success", details);
                }

            });
        }

    },

    // check if product number already exists in db
    getCheckReviewDelete: function (req, res) {
        var rNum = req.query.rNum;

        db.findOne('Review', {rNum: rNum}, function (result) {
            res.send(result);
        });
    } 
}

module.exports = reviewdeleteController;