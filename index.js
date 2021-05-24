const dotenv = require('dotenv');
const express = require('express');
const hbs = require('hbs');
const session = require('express-session');



const app = express() //initializing an express server and passing to app 

app.set('view engine', '.hbs');
hbs.registerPartials(__dirname + '/views/partials');
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.use(express.static('public'));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<1234>@test-project.h70ee.mongodb.net/clothingandscience?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.urlencoded({extended: true}));

app.use(session({
    'secret': 'ccapdev-session', 
    'resave': false, 
    'saveUninitialized': false, 
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
