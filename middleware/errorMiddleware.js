// Custom error handler middleware
const errorHandler = (error, req, res, next) => {
  console.error('Error:', error);

  // Mongoose validation error (400 Bad Request)
  if (error.name === 'ValidationError') {
    const messages = Object.values(error.errors).map(err => err.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: messages
    });
  }

  // Mongoose duplicate key error (400 Bad Request)
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `${field} must be unique. This ${field} already exists.`
    });
  }

  // Mongoose cast error (400 Bad Request)
  if (error.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    });
  }

  // Custom 404 error
  if (error.status === 404) {
    return res.status(404).json({
      success: false,
      message: error.message || 'Resource not found'
    });
  }

  // Default 500 server error
  res.status(error.status || 500).json({
    success: false,
    message: error.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
};

module.exports = errorHandler;
