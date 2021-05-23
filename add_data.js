const db = require('./models/db.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;


const collection = 'User';
const products = 'Product';
const reviews = 'Review';

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
    qtySold: "0",
    pDesc: "Clothing and Science become one. This ultra stretch jeans was made possible through our newest technology. Jeans as light as feather and as smooth as baby's skin. Get yours now and become comfy and stylish today!",
    pColor1: "Blue",
    pColor2: "Navy",
    pColor3: "Black",
    pColor4: "Brown",
    pSize1: "XS",
    pSize2: "S",
    pSize3: "M",
    pSize4: "L",
    pImage1: "../images/product1a.jpg",
    pImage2: "../images/product1b.jpg",
    pImage3: "../images/product1c.jpg",
    pImage4: "../images/product1d.jpg"
}

db.insertOne(products, prod);

var prod = {
    pNum: "100457",
    pName: "High Rise Jeans",
    pPrice: "1490.00",
    pQty: "599",
    qtySold: "0",
    pDesc: "Introducing a new generation of High Rise fabric. Our most flattering and comfortable high rise jeans yet.",
    pColor1: "Red",
    pColor2: "Orange",
    pColor3: "Blue",
    pColor4: "",
    pSize1: "S",
    pSize2: "M",
    pSize3: "L",
    pSize4: "",
    pImage1: "../images/product2a.jpg",
    pImage2: "../images/product2b.jpg",
    pImage3: "../images/product2c.jpg",
    pImage4: ""
}

db.insertOne(products, prod);

var prod = {
    pNum: "100458",
    pName: "Linen Open Collar Shirt",
    pPrice: "790.00",
    pQty: "658",
    qtySold: "0",
    pDesc: "An open collar that makes the most out of the supple and elegant material. An item that has a tasteful, laid-back feel.",
    pColor1: "Yellow",
    pColor2: "Red",
    pColor3: "",
    pColor4: "",
    pSize1: "XS",
    pSize2: "S",
    pSize3: "",
    pSize4: "",
    pImage1: "../images/product3a.jpg",
    pImage2: "../images/product3a.jpg",
    pImage3: "../images/product3a.jpg",
    pImage4: ""
}

db.insertOne(products, prod);

var prod = {
    pNum: "100459",
    pName: "Men's Socks",
    pPrice: "390.00",
    pQty: "1949",
    qtySold: "0",
    pDesc: "Your toes stay warm and toasty. A textured, neat knitted fabric.",
    pColor1: "Gray",
    pColor2: "Black",
    pColor3: "White",
    pColor4: "",
    pSize1: "",
    pSize2: "",
    pSize3: "",
    pSize4: "",
    pImage1: "../images/product4a.jpg",
    pImage2: "../images/product4b.jpg",
    pImage3: "../images/product4c.jpg",
    pImage4: ""
}

db.insertOne(products, prod);

var prod = {
    pNum: "100460",
    pName: "Long Sleeve Sweatshirt",
    pPrice: "1990.00",
    pQty: "100",
    qtySold: "0",
    pDesc: "Warm and comfortable brushed T-shirt. This item has been updated to make it an easy choice, even when worn on its own.",
    pColor1: "White",
    pColor2: "Blue",
    pColor3: "Black",
    pColor4: "Brown",
    pSize1: "S",
    pSize2: "M",
    pSize3: "L",
    pSize4: "XL",
    pImage1: "../images/product5a.jpg",
    pImage2: "../images/product5b.jpg",
    pImage3: "../images/product5c.jpg",
    pImage4: "../images/product5d.jpg"
}

db.insertOne(products, prod);

var = {
    pNum: 100456,
    userName: "Clarissa",
    rating: 5.0,
    rev: "The pants was very smooth and very soft. It was also very light and comfortable. This is probably my best buy ever. I am using it everyday. Planning to buy another one. great job C & S!"
}

db.insertOne(reviews, rev);

var = {
    pNum: 100456,
    userName: "Ina",
    rating: 5.0,
    rev: "I'm on the heavy side and so wearing jeans is a struggle. But this pair let's me wear jeans again without difficulty (even though I haven't lost any weight)"
}

db.insertOne(reviews, rev);

var = {
    pNum: 100456,
    userName: "Nicole",
    rating: 3.0,
    rev: "This new version seem to fit tighter than the old version. I like it. However, this new version is mid rise, while the old version is high rise. Would’ve been better if they made this high rise too. EZY usually meant high rise in Uniqlo lingo. Puzzled why they made this mid rise."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100456,
    userName: "Carla",
    rating: 4.8,
    rev: "This is so comfy and stretchable, I like the fit and it is not too skinny fit on me."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100456,
    userName: "Clar",
    rating: 5.0,
    rev: "Great quality jeans! I got this in color blue. These are made to move pants and an all-day-every-day comfort. The material on the inside feels soft against your skin."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100456,
    userName: "Anna",
    rating: 4.0,
    rev: "The pants are not too skinny and indeed give a good amount of stretch. The fit is more on the slim cut side rather than on skin-hugging skinny cut. Elastic waist band is a welcome bonus."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100456,
    userName: "Patricia",
    rating: 5.0,
    rev: "Very much satisfied with my purchase. It fits me very well. Hoping for more shades of blue for this kind of ankle jeans. Thank you so much C & S."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100457,
    userName: "Nicole",
    rating: 3.0,
    rev: "This new version seem to fit tighter than the old version. I like it. However, its fit is not just for me."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100457,
    userName: "Carla",
    rating: 4.8,
    rev: "Only high rise jeans suits me. I'm glad this is one of those jeans."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100457,
    userName: "Anna",
    rating: 4.8,
    rev: "The fit of the pants does not make it hard for the legs to breathe in."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100457,
    userName: "Anna",
    rating: 4.8,
    rev: "The fit of the pants does not make it hard for the legs to breathe in."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100458,
    userName: "Ina",
    rating: 5.0,
    rev: "Im on the heavy side and so finding a shirt that fits me perfectly is a struggle. But this shirt is a miracle!",
    img1: "../images/product3a.jpg",
    img2: "../images/product3b.jpg",
}

db.insertOne(reviews, rev);

var = {
    pNum: 100458,
    userName: "Nicole", 
    rating: 3.0,
    rev: "This new version seem to fit tighter than the old version. I like it. However, the fit of this shirt for me is weird."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100458,
    userName: "Carla",
    rating: 4.8,
    rev: "This is so stylish and comfortable at the same time!"
}

db.insertOne(reviews, rev);

var = {
    pNum: 100458,
    userName: "Anna",
    rating: 4.0,
    rev: "The shirt embraces my body wonderfully."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100459,
    userName: "Kent",
    rating: 5.0,
    rev: "A bit tight but very smooth. Nice quality socks..",
    img1: "../images/product4a.jpg".
    img2: "../images/product4b.jpg"
}

db.insertOne(reviews, rev);

var = {
    pNum: 100459,
    userName: "Kyle",
    rating: 5.0,
    rev: "This one is comfortable to wear and nice fit on my feet"
}

db.insertOne(reviews, rev);

var = {
    pNum: 100460,
    userName: "Juan",
    rating: 5.0,
    rev: "If you're looking for something to be part of your capsule wardrobe, this is definitely one of the must have pieces. It's affordable, fit is perfect plus it is extremely soft! I ended buying 3 different colors!",
    img1: "../images/product5a.jpg".
    img2: "../images/product5b.jpg"
}

var = {
    pNum: 100460,
    userName: "Dos",
    rating: 5.0,
    rev: "It fits well. Nice and comfortable. Store personnel are helpful and accomodating. Affordable!"
}

db.insertOne(reviews, rev);

var = {
    pNum: 100460,
    userName: "",
    rating: ,
    rev: ""
}

db.insertOne(reviews, rev);

var = {
    pNum: 100460,
    userName: "Trish",
    rating: 4.0,
    rev: "The texture, the color even the size fits perfectly. I hope there are lots of colors to choose from. Perfect for cold weather as well."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100460,
    userName: "John",
    rating: 4.0,
    rev: "I ordered this shirt last december because i thought that the design was nice. The order arrived and i was right, the shirt was very worth the price. But i wish u can add a larger size. I hope u can add a xxl size because i want to wear this design."
}

db.insertOne(reviews, rev);

var = {
    pNum: 100460,
    userName: "Mary",
    rating: 5.0,
    rev: "Hubby loves this.. He has this in 3 colors... Perfect fit... Okay for rounds and clinic..."
}

db.insertOne(reviews, rev);

