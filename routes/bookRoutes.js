const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  searchBooks
} = require('../controllers/bookController');

// POST create a new book
router.post('/', createBook);

// GET all books
router.get('/', getAllBooks);

// GET search books (must be before :id route)
router.get('/search', searchBooks);

// GET a single book by ID
router.get('/:id', getBookById);

// PUT update a book
router.put('/:id', updateBook);

// DELETE a book
router.delete('/:id', deleteBook);

module.exports = router;
