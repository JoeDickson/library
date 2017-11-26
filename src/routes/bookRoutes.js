var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function(nav) {
    var bookService = require('../services/goodreadsService')();
    var bookcontroller = require('../controllers/bookController')(bookService, nav);

    bookRouter.use(bookcontroller.middleware);

    bookRouter.route('/')
        .get(bookcontroller.getIndex);

    bookRouter.route('/:id')
        .get(bookcontroller.getById);

    return bookRouter;
};
module.exports = router;