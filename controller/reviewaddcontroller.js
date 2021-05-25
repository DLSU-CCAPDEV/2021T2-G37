const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Review = require('../models/ReviewSchema.js');

const adminaddReviewController = {
    getAddReview: function (req, res) {
        var pNum = req.params.pNum;
        var userName = req.session.userName;

        var details = {
            pNum: pNum,
            userName: userName
        }
        res.render('review_add', details);
    }, 

    postAddReview: function (req, res) {
        var rNum = "" + (Math.floor(Math.random() * (9999999 - 1000000)) + 1000000);
        var errors = validationResult(req);


        if (!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
            }

            var details = {
                rNum: rNum,
                action: "was not added successfully."
            }
            res.render("review_success", details);
        }

        else {
            var pNum = req.body.pnum;
            var userName = req.body.username;
            var rating = req.body.rating;
            var rev = req.body.review;
            var img1 = req.body.img1;
            var img2 = req.body.img2;

            var Review = {
                rNum: rNum,
                pNum: pNum,
                userName: userName,
                rating: rating,
                rev: rev,
                img1: img1,
                img2: img2
            }

            db.insertOneCallback('Review', Review, function(flag) {
                if(flag) { 

                    var details = {
                        pNum: pNum,
                        action: "was added successfully."
                    }
                    res.render("addreview_success", details);
                }
                else{
                    var details = {
                        pNum: pNum,
                        action: "was not added successfully."
                    }
                    res.render("addreview_success", details);
                }
            });
        }

    },

    // check if product number already exists in db
    getCheckNumReviewAdd: function (req, res) {
        var rNum = req.query.rNum;

        db.findOne('Review', {rNum: rNum}, function (result) {
            res.send(result);
        });
    }  
}

module.exports = adminaddReviewController;