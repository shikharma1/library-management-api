# 🚀 Quick Setup Guide - Library Management API

## Step 1: Install Dependencies
```bash
npm install
```

This will install:
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables
- `nodemon` - Development server (auto-reload)

## Step 2: Verify .env Configuration
Your `.env` file should contain:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-management
NODE_ENV=development
```

## Step 3: Ensure MongoDB is Running
- **Local MongoDB**: `mongod` command
- **MongoDB Atlas**: Use cloud connection string in MONGODB_URI

## Step 4: Start the Development Server
```bash
npm run dev
```

You should see:
```
=================================
Library Management API
Server running on port 5000
Environment: development
=================================
```

## Step 5: Test the API

### Health Check
```
GET http://localhost:5000/api/health
```

### Add a Book
```
POST http://localhost:5000/api/books
Content-Type: application/json

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

### Get All Books
```
GET http://localhost:5000/api/books
```

### Search Books
```
GET http://localhost:5000/api/books/search?title=Gatsby
GET http://localhost:5000/api/books/search?author=Fitzgerald
```

### Get Book by ID
```
GET http://localhost:5000/api/books/{book_id}
```

### Update Book
```
PUT http://localhost:5000/api/books/{book_id}
Content-Type: application/json

{
  "availableCopies": 3,
  "status": "Available"
}
```

### Delete Book
```
DELETE http://localhost:5000/api/books/{book_id}
```

## MongoDB Atlas Setup (For Cloud Database)

1. Create account at [mongodb.com](https://mongodb.com)
2. Create a free cluster
3. Get connection string
4. Update `.env`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/library-management
```

## Production Deployment to Render

1. Push code to GitHub
2. Create Render account
3. Create Web Service
4. Connect GitHub repository
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection
   - `NODE_ENV`: production
6. Build: `npm install`
7. Start: `npm start`

## Project Files Reference

| File | Purpose |
|------|---------|
| `server.js` | Main Express server |
| `config/db.js` | MongoDB connection |
| `models/Book.js` | Book data schema |
| `controllers/bookController.js` | Business logic |
| `routes/bookRoutes.js` | API routes |
| `middleware/errorMiddleware.js` | Error handling |
| `package.json` | Dependencies |
| `.env` | Environment variables |
| `.env.example` | Example env file |

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check `MONGODB_URI` in `.env`
- Verify database name is correct

### Port Already in Use
Change PORT in `.env` or kill process using port 5000

### Module Not Found
Run `npm install` again

### Nodemon Not Reloading
- Ensure `npm run dev` is used (not `npm start`)
- Check file is saved and in watched directories

## Testing Checklist

- [ ] `npm install` succeeds
- [ ] Server starts with `npm run dev`
- [ ] `/api/health` returns 200
- [ ] Can POST a new book
- [ ] Can GET all books
- [ ] Can GET book by ID
- [ ] Can UPDATE a book
- [ ] Can DELETE a book
- [ ] Can SEARCH books by title
- [ ] Can SEARCH books by author
- [ ] Error handling works (test invalid ISBN)

## Questions or Issues?

Refer to:
- `README.md` - Complete documentation
- Individual controller functions - Business logic
- `models/Book.js` - Schema definition
- `.env.example` - Configuration template

Happy coding! 🎉
