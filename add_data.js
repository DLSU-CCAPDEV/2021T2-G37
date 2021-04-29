const db = require('./models/db.js');


const collection = 'User';

db.createDatabase();


var acc = {
    fullName: "Tobio Kageyama", 
    userName: "KingOfTheCourt", 
    email: "kingtobio@gmail.com", 
    pw: "ihatehinata", 
    deladdr: "Karasuno Volleyball Court", 
    contactnum: "43109489123"
};

db.insertOne(collection, acc);

var acc = {
    fullName: "Toru Oikawa", 
    userName: "bestsetter1", 
    email: "bestsetter@gmail.com", 
    pw: "0nehandt0ss", 
    deladdr: "Aoba Johsai's Volleyball Court", 
    contactnum: "528195719385"
};

db.insertOne(collection, acc);

var acc = {
    fullName: "Makoto Nijima", 
    userName: "bestgirl", 
    email: "bestgirl@gmail.com", 
    pw: "FistOfJustic3", 
    deladdr: "Cafe LeBlanc", 
    contactnum: "276192847103"
};

db.insertOne(collection, acc);
var acc = {
    fullName: "Naoto Shirogane", 
    userName: "detectiveprincess", 
    email: "detectiveprincess@gmail.com", 
    pw: "puzzlesRDaBomb", 
    deladdr: "Karasuno Volleyball Court", 
    contactnum: "43109489123"
};

db.insertOne(collection, acc);
var acc = {
    fullName: "Phemsee Arisato", 
    userName: "bestfemc", 
    email: "darkhour@gmail.com", 
    pw: "door-kun", 
    deladdr: "Iwatodai Dormitory", 
    contactnum: "28501927501"
};

db.insertOne(collection, acc);