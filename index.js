const dotenv = require('dotenv');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db.js');
const exphbs = require('express-handlebars');
const hbs = require('hbs');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');


const app = express() //initializing an express server and passing to app 
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', '.hbs');
hbs.registerPartials(__dirname + '/views/partials');
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css')); 
app.use('/images', express.static(__dirname + 'public/images'));

app.use(express.urlencoded({extended: true}));

app.use(session({
    'secret': 'ccapdev-session', 
    'resave': false, 
    'saveUninitialized': false, 
    //  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

const indexRouter = require('./routes/router');
app.use('/', indexRouter);


app.use(function(req, res){

    var details = {};

    if (req.session.userName) {
        details.flag = true;
        details.userName = req.session.userName;
    }

    else 
        details.flag = false; 

    res.render('error', details);

})


app.listen(port, hostname, function() {
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
}); //bind server to the port 