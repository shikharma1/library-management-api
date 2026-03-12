const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    
    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Search books by title or author
// @route   GET /api/books/search?title=xyz
// @access  Public
exports.searchBooks = async (req, res, next) => {
  try {
    const { title, author } = req.query;

    if (!title && !author) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title or author for search'
      });
    }

    const searchQuery = {};
    
    if (title) {
      searchQuery.title = { $regex: title, $options: 'i' }; // Case-insensitive search
    }
    
    if (author) {
      searchQuery.author = { $regex: author, $options: 'i' };
    }

    const books = await Book.find(searchQuery);

    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No books found matching your search criteria'
      });
    }

    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
// @access  Public
exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new book
// @route   POST /api/books
// @access  Private
exports.createBook = async (req, res, next) => {
  try {
    const { title, author, isbn, genre, publisher, publicationYear, totalCopies, shelfLocation, bookType } = req.body;

    // Validate required fields
    if (!title || !author || !isbn || !genre || !publisher || !publicationYear || !totalCopies || !shelfLocation || !bookType) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    const book = await Book.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Book added successfully',
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: book
    });
  } catch (error) {
    next(error);
  }
};
