const db = require('./models/db.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;


const collection = 'User';
const products = 'Product';

// const User = require('../models/UserSchema.js');
// const Admin = require('../models/AdminSchema.js');
// const Products = require('./models/ProductSchema.js');

db.createDatabase();


var acc = {
    pw: "ihatehinata"
};

bcrypt.hash(acc.pw, saltRounds, function(err, hash){
    var hashacc = {
        fullName: "Nicole Kageyama", 
        userName: "QueenOfTheCourt", 
        email: "queenNics@gmail.com", 
        pw: hash, 
        deladdr: "1138 Aguilar Street Sta. Cruz 1000, Manila", 
        contactnum: "63917899505"
    }
    db.insertOne(collection, hashacc);
});

var acc = {
    pw: "0nehandt0ss"
};

bcrypt.hash(acc.pw, saltRounds, function(err, hash){
    var hashacc = {
        fullName: "Carla Oikawa", 
        userName: "bestsetter1", 
        email: "bestsetter@gmail.com", 
        pw: hash, 
        deladdr: "Unit C D M Building Durian StreetDona Josefa Subdivision Pilar 1740, Las Pinas", 
        contactnum: "63916562555"
    }
    db.insertOne(collection, hashacc);
});

var acc = {
    pw: "FistOfJustic3", 
};

bcrypt.hash(acc.pw, saltRounds, function(err, hash){
    var hashacc = {
        fullName: "Anna Nijima", 
        userName: "bestgirl", 
        email: "bestgirl@gmail.com", 
        pw: hash, 
        deladdr: "Cafe LeBlanc, 2/F Palarca Building Quezon Blvd. Cor. Peredes Street Sampaloc 1000, Cafe LeBlanc", 
        contactnum: "63919421330"
    }
    db.insertOne(collection, hashacc);
});

var acc = {
    pw: "puzzlesRDaBomb"
};

bcrypt.hash(acc.pw, saltRounds, function(err, hash){
    var hashacc = {
        fullName: "Clarissa Shirogane", 
        userName: "detectiveprincess", 
        email: "detectiveprincess@gmail.com", 
        pw: hash, 
        deladdr: "15/F Ps Bank Center 777 Paseo De Roxas Street1226, Makati City", 
        contactnum: "63920961450"
    }
    db.insertOne(collection, hashacc);
});

var acc = {
    pw: "Ms-door-kun", 
};

bcrypt.hash(acc.pw, saltRounds, function(err, hash){
    var hashacc = {
        fullName: "Ina Arisato", 
        userName: "bestfemc", 
        email: "darkhour@gmail.com", 
        pw: hash, 
        deladdr: "3 Anonas Street Potrero 1470, Malabon", 
        contactnum: "63917885212"
    }
    db.insertOne(collection, hashacc);
});


var acc = {
    pw: "ThisGirlHasNoFace", 
};

bcrypt.hash(acc.pw, saltRounds, function(err, hash){
    var hashacc = {
        fullName: "Arya Stark", 
        userName: "FacelessMan", 
        email: "girlwithnoface@gmail.com",
        pw: hash, 
        deladdr: "260 Roosevelt Avenue, San Francisco Del Monte, 1100, Quezon City, Metro Manila", 
        contactnum: "63917627622"
    }
    db.insertOne(collection, hashacc);
});


//insert admin

var admin = {
    pw: "xAyaHandRakAn"
}

bcrypt.hash(admin.pw, saltRounds, function(err, hash){
    var hashacc = {
        userName: "admin",
        email: "xayahsakalam@gmail.com",
        pw: hash
    }
    db.insertOne('Admin', hashacc);
});


// Inserts sample products
// ** Colors and Sizes to be fixed **
var prod = {
    pNum: "100456",
    pName: "Ultra Stretch Jeans",
    pPrice: "1990.00",
    pQty: "100",
    pDesc: "Clothing and Science become one. This ultra stretch jeans was made possible through our newest technology. Jeans as light as feather and as smooth as baby's skin. Get yours now and become comfy and stylish today!",
    pColor: "Blue",
    pSize: "XS",
    pImage: "../images/product1a.jpg"
}

db.insertOne(products, prod);

var prod = {
    pNum: "100457",
    pName: "High Rise Jeans",
    pPrice: "1490.00",
    pQty: "599",
    pDesc: "Introducing a new generation of High Rise fabric. Our most flattering and comfortable high rise jeans yet.",
    pColor: "Black",
    pSize: "XS",
    pImage: "../images/product2a.jpg"
}

db.insertOne(products, prod);

var prod = {
    pNum: "100458",
    pName: "Linen Open Collar Shirt",
    pPrice: "790.00",
    pQty: "658",
    pDesc: "An open collar that makes the most out of the supple and elegant material. An item that has a tasteful, laid-back feel.",
    pColor: "Yellow",
    pSize: "XS",
    pImage: "../images/product3a.jpg"
}

db.insertOne(products, prod);

var prod = {
    pNum: "100459",
    pName: "Men's Socks",
    pPrice: "390.00",
    pQty: "1949",
    pDesc: "Your toes stay warm and toasty. A textured, neat knitted fabric.",
    pColor: "Gray",
    pSize: "",
    pImage: "../images/product4a.jpg"
}

db.insertOne(products, prod);

var prod = {
    pNum: "100460",
    pName: "Long Sleeve Sweatshirt",
    pPrice: "1990.00",
    pQty: "100",
    pDesc: "Warm and comfortable brushed T-shirt. This item has been updated to make it an easy choice, even when worn on its own.",
    pColor: "White",
    pSize: "XS",
    pImage: "../images/product5a.jpg"
}

db.insertOne(products, prod);
