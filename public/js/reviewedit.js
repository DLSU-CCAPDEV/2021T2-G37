
$(document).ready(function () {

    function isFilled() {
        var rating = validator.trim($('#rating').val());
        var review = validator.trim($('#review').val());

        var ratingEmpty = validator.isEmpty(rating);
        var reviewEmpty = validator.isEmpty(review);

        return !ratingEmpty && !reviewEmpty;
    }

    /* 
    start of validation 
    */
    function isValidRating(field) {
        var rating = validator.trim($('#rating').val());
        var isValidLength = validator.isLength(rating, {min: 1});

        if(isValidLength){
            if ($('#rating').val()>=0 && $('#rating').val()<=5){
                if (field.is($('#rating')))
                    $('#ratingerror').text('');
                
                return true;
            }
    
            else {
                if(field.is($('#rating')))
                    $('#ratingerror').text('Rating should range from 1 to 5.');
                
                return false;
            }
        }
        else {
            if(field.is($('#rating')))
                $('#rating').text('Rating should not be empty.');
            
            return false;
        }
        
    }

    function isValidReview(field) {
        var review = validator.trim($('#review').val());
        var isValidLength = validator.isLength(review, {min: 10});

        if (isValidLength){
            if (field.is($('#review')))
                $('#reviewerror').text('');

            return true;
        }

        else {
            if(field.is($('#review')))
                $('#reviewerror').text('Review should be at least 10 characters.');
            
            return false;
        }
        
    }

    /*
    validatefield function 
    */
    
    function validateField(field, fieldName, error) {
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty) {
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
        }

        else
            error.text('');

        var filled = isFilled();
        var validReview = isValidReview(field);
        var validRating = isValidRating(field);

        if(filled && validRating && validReview)
            $('#btnadd').prop('disabled', false);
        else
            $('#btnadd').prop('disabled', true);

        /*
        start of valid pnum
        */            
    }

    /*
    start of keyup
    */
    $('#rating').keyup(function () {
        validateField($('#rating'), 'Rating', $('#ratingerror'));
    });

    $('#review').keyup(function () {
        validateField($('#review'), 'Review', $('#reviewerror'));
    });

});