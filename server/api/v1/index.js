const express = require('express');
const router = express.Router();
const books = require('./books/routes');
const authors = require('./authors/routes');

router.use('/books', books);
router.use('/authors', authors);

module.exports = router;