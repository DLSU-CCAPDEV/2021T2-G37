const db = require('./models/db.js');


const collection = 'User';

db.createDatabase();


var acc = {
    fullName: "Nicole Kageyama", 
    userName: "QueenOfTheCourt", 
    email: "queenNics@gmail.com", 
    pw: "ihatehinata", 
    deladdr: "1138 Aguilar Street Sta. Cruz 1000, Manila", 
    contactnum: "+639178995055"
};

db.insertOne(collection, acc);

var acc = {
    fullName: "Carla Oikawa", 
    userName: "bestsetter1", 
    email: "bestsetter@gmail.com", 
    pw: "0nehandt0ss", 
    deladdr: "Unit C D M Building Durian StreetDona Josefa Subdivision Pilar 1740, Las Pinas", 
    contactnum: "+639165625555"
};

db.insertOne(collection, acc);

var acc = {
    fullName: "Anna Nijima", 
    userName: "bestgirl", 
    email: "bestgirl@gmail.com", 
    pw: "FistOfJustic3", 
    deladdr: "Cafe LeBlanc, 2/F Palarca Building Quezon Blvd. Cor. Peredes Street Sampaloc 1000, Cafe LeBlanc", 
    contactnum: "+639194213030"
};

db.insertOne(collection, acc);
var acc = {
    fullName: "Clarissa Shirogane", 
    userName: "detectiveprincess", 
    email: "detectiveprincess@gmail.com", 
    pw: "puzzlesRDaBomb", 
    deladdr: "15/F Ps Bank Center777 Paseo De Roxas Street1226, Makati City", 
    contactnum: "+639209614850"
};

db.insertOne(collection, acc);
var acc = {
    fullName: "Ina Arisato", 
    userName: "bestfemc", 
    email: "darkhour@gmail.com", 
    pw: "door-kun", 
    deladdr: "3 Anonas Street Potrero 1470, Malabon", 
    contactnum: "+639178856212"
};

db.insertOne(collection, acc);

var acc = {
    fullName: "Arya Stark", 
    userName: "FacelessMan", 
    email: "girlwithnoface@gmail.com", 
    pw: "noface", 
    deladdr: "260 Roosevelt Avenue, San Francisco Del Monte, 1100, Quezon City, Metro Manila", 
    contactnum: "+639176276222"
};

db.insertOne(collection, acc);

//insert admin

var admin = {
    userName: "admin",
    email: "xayahsakalam@gmail.com",
    pw: "xAyaHandRakAn"
}

db.insertOne('Admin', admin);
