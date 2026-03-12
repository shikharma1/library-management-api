<<<<<<< HEAD
# Library Management API

A RESTful API for managing a university library system built with Node.js, Express.js, and MongoDB.

## Features

✅ Add new books to the library  
✅ View all book records  
✅ Update book details  
✅ Delete book records  
✅ Search books by title or author  
✅ MongoDB database with Mongoose  
✅ Complete error handling  
✅ Proper HTTP status codes  

## Project Structure

```
library-management-api/
├── config/
│   └── db.js                      # MongoDB database configuration
├── models/
│   └── Book.js                    # Book schema with validations
├── controllers/
│   └── bookController.js          # Business logic for book operations
├── routes/
│   └── bookRoutes.js              # API endpoints and routing
├── middleware/
│   └── errorMiddleware.js         # Global error handling middleware
├── .env                           # Environment variables
├── server.js                      # Main Express server
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd library-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-management
NODE_ENV=development
```

4. Start the server:
```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

The API will be running at `http://localhost:5000`

## Book Schema

Each book record contains the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| bookId | ObjectId | Yes | Auto-generated unique identifier |
| title | String | Yes | Book title (max 100 characters) |
| author | String | Yes | Author name |
| isbn | String | Yes | ISBN (unique, numbers and hyphens only) |
| genre | String | Yes | Book category/genre |
| publisher | String | Yes | Publisher name |
| publicationYear | Number | Yes | Year of publication (1000-current year) |
| totalCopies | Number | Yes | Total copies in library (minimum 1) |
| availableCopies | Number | No | Available copies (defaults to totalCopies) |
| shelfLocation | String | Yes | Physical shelf location |
| bookType | String | Yes | Type: Reference or Circulating |
| status | String | No | Status: Available or Checked Out (default: Available) |

## API Endpoints

### 1. Add a New Book
**POST** `/api/books`

Request body:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0-7432-7356-5",
  "genre": "Fiction",
  "publisher": "Scribner",
  "publicationYear": 1925,
  "totalCopies": 5,
  "shelfLocation": "A1-B2",
  "bookType": "Circulating"
}
```

Response (201 Created):
```json
{
  "success": true,
  "message": "Book added successfully",
  "data": { ... }
}
```

### 2. Get All Books
**GET** `/api/books`

Response (200 OK):
```json
{
  "success": true,
  "count": 10,
  "data": [{ ... }, { ... }]
}
```

### 3. Get Book by ID
**GET** `/api/books/:id`

Response (200 OK):
```json
{
  "success": true,
  "data": { ... }
}
```

### 4. Search Books
**GET** `/api/books/search?title=Great` or `/api/books/search?author=Fitzgerald`

Response (200 OK):
```json
{
  "success": true,
  "count": 1,
  "data": [{ ... }]
}
```

### 5. Update Book
**PUT** `/api/books/:id`

Request body (any fields to update):
```json
{
  "availableCopies": 3,
  "status": "Available"
}
```

Response (200 OK):
```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": { ... }
}
```

### 6. Delete Book
**DELETE** `/api/books/:id`

Response (200 OK):
```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": { ... }
}
```

## HTTP Status Codes

| Code | Meaning | Used When |
|------|---------|-----------|
| 200 | Success | Request successful |
| 201 | Created | Book added successfully |
| 400 | Bad Request | Invalid input or duplicate ISBN |
| 404 | Not Found | Book ID not found |
| 500 | Server Error | Database or server error |

## Error Handling

The API includes comprehensive error handling:

- **Validation Errors**: Required fields and format validation
- **Duplicate ISBN**: ISBN must be unique across all books
- **Invalid ID Format**: MongoDB ObjectId validation
- **Database Errors**: Proper error responses with messages
- **Not Found**: Clear messages for missing resources

All errors include a `success: false` flag and descriptive message.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Environment**: dotenv
- **Development**: Nodemon

## Deployment

### GitHub
1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-url>
git push -u origin main
```

2. Add `.gitignore`:
```
node_modules/
.env
.env.local
.DS_Store
```

### Render
1. Connect your GitHub repository to Render
2. Set up a new Web Service
3. Set Environment Variables in Render dashboard:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production
4. Build Command: `npm install`
5. Start Command: `npm start`

## Testing with Postman

1. Import the API endpoints
2. Set variables for `BASE_URL` and `BOOK_ID`
3. Test each endpoint with sample data
4. Verify response status codes and messages

## Future Enhancements

- Add member management
- Implement borrowing/returning functionality
- Add authentication and authorization
- Implement pagination for book listings
- Add sorting and filtering options
- Create admin dashboard
- Add logging system

## License

ISC

## Support

For issues and questions, please open an issue on GitHub.
=======
# library-management-api
>>>>>>> 8f9ba1523cd67f9a3e81c7b2e615b02adab34c02
