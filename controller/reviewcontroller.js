//const { validationResult } = require('express-validator');
const db = require('../models/db.js');

const reviewController = {
    getAddReview: function (req, res) {
        res.render('review_add');
    },

    getEditReview: function (req, res) {
        res.render('review_edit');
    }
  
}

module.exports = reviewController;