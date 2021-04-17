const dotenv = require('dotenv');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
//const db = require('./models/db.js');

const app = express() //initializing an express server and passing to app 
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css')); 
app.use('/images', express.static(__dirname + 'public/images'));


app.get('/', function(req, res){ // when someone connects to server, get request to this path, and reply back with hello world

    fs.readFile('./views/home.html', function(err, data){{
        res.setHeader('Content-Type', 'text/html');
        if(err){
            res.status = 404;
            res.write('404 not found');
        }
        else {
            res.status = 200;
            res.write(data);
        }
        res.end();
    }});
});


app.listen(port, hostname, function() {
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
}); //bind server to the port 