const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Review = require('../models/ReviewSchema.js');

const reviewCodeController = {
    getAddReview: function (req, res) {
        res.render('review_add');
    },

    getEditReviewCode: function (req, res) {
        res.render('review_edit_code');
    },

    
    postEditReviewCode: function (req, res) {
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
            }

            res.render('review_edit', details);
        }

        else {
            var rNum = req.body.rnum;

            db.findOne('Review', {rNum: rNum}, function(result){
                if(result){
                    res.redirect(307, 'editreview/' + rNum);
                }

            });
        }

    },

    // check if product number already exists in db
    getRevNumCode: function (req, res) {
        var rNum = req.query.rNum;

        db.findOne('Review', {rNum: rNum}, function (result) {
            res.send(result);
        });
    } 
  
}

module.exports = reviewCodeController;