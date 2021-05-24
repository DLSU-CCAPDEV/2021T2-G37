const dotenv = require('dotenv');
const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const app = express() //initializing an express server and passing to app 

app.set('view engine', '.hbs');
hbs.registerPartials(__dirname + '/views/partials');
dotenv.config();
port = process.env.PORT || 3000;

hostname = process.env.HOSTNAME;

app.use(express.static('public'));


app.use(express.urlencoded({extended: true}));

app.use(session({
    'secret': 'ccapdev-session', 
    'resave': false, 
    'saveUninitialized': false, 
    'store': new MongoStore(options)
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
