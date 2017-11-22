var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
        title: 'Lord of the Rings',
        genre: 'Fantasy',
        author: 'Tolkien',
        read: true
    },
    {
        title: 'War and Peace',
        genre: 'Historical Ficti0n',
        author: 'Tolstoy',
        read: false
    },
    {
        title: 'Mein Kampf',
        genre: 'Propaganda',
        author: 'Hitler',
        read: false
    }
];

var router = function(nav) {

    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                })
            });

            //res.send('inserting books');
        });

    return adminRouter;
};
module.exports = router;