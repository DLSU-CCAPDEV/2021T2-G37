const dotenv = require('dotenv');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db.js');
const exphbs = require('express-handlebars');


const app = express() //initializing an express server and passing to app 
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', '.hbs');
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css')); 
app.use('/images', express.static(__dirname + 'public/images'));

app.use(express.urlencoded({extended: true}));


const indexRouter = require('./routes/router');
app.use('/', indexRouter);



app.listen(port, hostname, function() {
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
}); //bind server to the port 