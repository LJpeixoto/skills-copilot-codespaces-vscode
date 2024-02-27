// Create web server using express and an existing commentsController.js
// Use the commentsController.js to handle the request and response

const express = require('express');
const commentsController = require('./commentsController');

const app = express();

app.get('/comments', commentsController.getComments);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// commentsController.js
const comments = [
  { id: 1, comment: 'Love this!' },
  { id: 2, comment: 'Super good' },
  { id: 3, comment: 'You are the best' },
  { id: 4, comment: 'Ramen is my fav food ever' },
];

exports.getComments = (req, res) => {
  res.status(200).json(comments);
};

// Test the server using Postman or your browser to make a GET request to http://localhost:3000/comments. You should see the comments returned in JSON format.
