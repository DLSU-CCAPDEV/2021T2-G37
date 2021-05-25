const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const Review = require('../models/ReviewSchema.js');

const reviewCodeController = {

    getEditReviewCode: function (req, res) {
        var adminusername = req.params.userName;
        var details = {
            adminusername: adminusername
        }
        res.render('review_edit_code', details);
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
                    var review = {
                        adminusername: req.params.userName,
                        rNum: result.rNum,
                        pNum: result.pNum,
                        userName: result.userName,
                        rev: result.rev,
                        rating: result.rating,
                        img1: result.img1,
                        img2: result.img2
                    }
    
                    res.render('review_edit', review);
                }

            });
        }

    },

    // check if review number already exists in db
    getRevNumCode: function (req, res) {
        var rNum = req.query.rNum;

        db.findOne('Review', {rNum: rNum}, function (result) {
            res.send(result);
        });
    } 
  
}

module.exports = reviewCodeController;