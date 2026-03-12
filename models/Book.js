const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters']
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
      trim: true,
      match: [/^[0-9\-]+$/, 'ISBN must contain only numbers and hyphens']
    },
    genre: {
      type: String,
      required: [true, 'Genre/Category is required'],
      enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Mystery', 'Self-Help', 'Technology', 'Other'],
      default: 'Other'
    },
    publisher: {
      type: String,
      required: [true, 'Publisher name is required'],
      trim: true
    },
    publicationYear: {
      type: Number,
      required: [true, 'Publication year is required'],
      min: [1000, 'Publication year must be 4 digits'],
      max: [new Date().getFullYear(), 'Publication year cannot be in the future']
    },
    totalCopies: {
      type: Number,
      required: [true, 'Total copies must be specified'],
      min: [1, 'Total copies must be at least 1']
    },
    availableCopies: {
      type: Number,
      default: function() {
        return this.totalCopies;
      },
      min: [0, 'Available copies cannot be negative']
    },
    shelfLocation: {
      type: String,
      required: [true, 'Shelf location is required'],
      trim: true
    },
    bookType: {
      type: String,
      enum: ['Reference', 'Circulating'],
      required: [true, 'Book type is required']
    },
    status: {
      type: String,
      enum: ['Available', 'Checked Out'],
      default: 'Available'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
