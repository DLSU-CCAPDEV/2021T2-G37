const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Review = require('../models/ReviewSchema.js');

const reviewEditController = {

    getEditReview: function (req, res) {
        var adminusername = req.params.userName;
        var details = {
            adminusername: adminusername
        }
        res.render('review_edit', details);
    },

    postEditMainReview: function (req, res) {
        var rNum = req.body.rNum;
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].param + 'error'] = errors[i].msg;
            }

            res.render("review_success", details);
        }

        else {
            var rNum = req.body.rnum;
            var pNum = req.body.pnum;
            var userName = req.body.username;
            var rating = req.body.rating;
            var rev = req.body.review;
            var img1 = req.body.img1;
            var img2 = req.body.img2;


            db.findOne('Review', {rNum: rNum}, function(result){
                if(result){
    
                    if(img1 == "")
                        img1 = result.img1;
                    if(img2 == "")
                        img2 = result.img2;

                    //updates the db
                    db.updateOne('Review', 
                        {rNum: rNum},
                        {
                            $set: {
                                pNum: pNum,
                                userName: userName,
                                rating: rating,
                                rev: rev,
                                img1: img1,
                                img2: img2
                            }
                        });
    
                    var details = {
                        rNum: rNum,
                        adminusername: req.params.userName,
                        action: "was edited successfully."
                    }
                    res.render("review_success", details);
                }
            });
        }

    },

    // check if review number already exists in db
    getRevNumEdit: function (req, res) {
        var rNum = req.query.rnum;

        db.findOne('Review', {rNum: rNum}, function (result) {
            res.send(result);
        });
    } 
  
}

module.exports = reviewEditController;