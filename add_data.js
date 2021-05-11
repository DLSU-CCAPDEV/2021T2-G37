const db = require('./models/db.js');


const collection = 'User';
const products = 'Product';

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
    deladdr: "15/F Ps Bank Center 777 Paseo De Roxas Street1226, Makati City", 
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
