const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/book/', (req, res, next) => {
    const books = require('./books.json');
    res.json(books);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
