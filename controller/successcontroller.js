const successcontroller = {

    getSuccess: function(req, res){


        var details = {
            fullName: req.query.fullName,
            userName: req.query.userName
        };

        res.render('success', details);
    }
}

module.exports = successcontroller;