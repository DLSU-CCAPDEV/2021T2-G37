const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const client = mongodb.MongoClient;
const url = process.env.DB_URL;
const options = { useUnifiedTopology: true}
const dbName = 'clothingandscience';


const database = {
        //doc is a js object 

    createDatabase: function() {
        client.connect(url, options, function(err, db){
            if (err) throw err;
            console.log('Database created.');
            db.close();
        });
    },
    
    insertOne: function(collection, doc) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).insertOne(doc, function (err, res) {
                if(err) throw err;
                console.log('1 document inserted');
                db.close();
            });
        });
    },
    
    insertOneCallback : function(collection, doc, callback) {
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) return callback(false)
            var database = db.db(dbName); // connect to a specific database in mongodb 
            database.collection(collection) // in this database, go to a specific ollection 
            .insertOne(doc, function(err, res){ //insert this document in the collection, res is result 
                if (err) throw err;
                console.log('1 document inserted');
                return callback(true);
            });
        });
    }, 

    insertMany : function(collection, docs) {
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) throw err;
            var database = db.db(dbName); // connect to a specific database in mongodb 
            database.collection(collection) // in this database, go to a specific ollection 
            .insertMany(docs, function(err, res){ //insert this document in the collection, res is result 
                if (err) throw err;
                console.log('Documents inserted: ' + res.insertedCount);
                db.close();
            });
        });
    },

    findOne: function(collection, query, callback){
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) throw err;
            var database = db.db(dbName);  
            database.collection(collection) 
            .findOne(query, function(err, result){  
                if (err) throw err;
                return callback(result);
            });
        });
    },
    
    findMany: function(collection, query, sort=null, projection=null, limit, skip, callback){
        client.connect(url, options, function(err, db){
            if (err) throw err;
            var database = db.db(dbName);
            if (limit == null && skip == null) {
                database.collection(collection)
                .find(query, {projection: projection})
                .sort(sort).toArray(function (err, result){
                    if (err) throw err;
                    console.log(result);
                    return callback(result);
                    db.close();
                });
            } else {    // allows limit or skip of results
                database.collection(collection)
                .find(query, {projection: projection})
                .limit(limit).skip(skip)
                .sort(sort).toArray(function (err, result){
                    if (err) throw err;
                    console.log(result);
                    return callback(result);
                    db.close();
                });
            }
        });
    },

    deleteOne : function(collection, filter) {
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) throw err;
            var database = db.db(dbName); // connect to a specific database in mongodb 
            database.collection(collection) // in this database, go to a specific ollection 
            .deleteOne(filter, function(err, res){ //insert this document in the collection, res is result 
                if (err) throw err;
                console.log('1 document deleted');
                db.close();
            });
        });
    }, 

    deleteMany : function(collection, filter) {
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) throw err;
            var database = db.db(dbName); // connect to a specific database in mongodb 
            database.collection(collection) // in this database, go to a specific ollection 
            .deleteMany(filter, function(err, res){ //insert this document in the collection, res is result 
                if (err) throw err;
                console.log('Documents deleted: ' + res.deletedCount);
                db.close();
            });
        });
    }, 

    updateOne : function(collection, filter, update) {
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) throw err;
            var database = db.db(dbName); // connect to a specific database in mongodb 
            database.collection(collection) // in this database, go to a specific ollection 
            .updateOne(filter, update, function(err, res){ //insert this document in the collection, res is result 
                if (err) throw err;
                console.log('1 document updated');
                db.close();
            });
        });
    }, 

    updateMany : function(collection, filter, update) {
        client.connect(url, options, function(err, db){ // connecting to the dataabase 
            if (err) throw err;
            var database = db.db(dbName); // connect to a specific database in mongodb 
            database.collection(collection) // in this database, go to a specific ollection 
            .updateOne(filter, update, function(err, res){ //insert this document in the collection, res is result 
                if (err) throw err;
                console.log('Documents updated: ' + res.modifiedCount);
                db.close();
            });
        });
    }
}

module.exports = database;







      

