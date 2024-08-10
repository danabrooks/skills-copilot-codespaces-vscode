// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

// Use body-parser to parse JSON
app.use(bodyParser.json());

// Read comments from file
const comments = JSON.parse(fs.readFileSync('./comments.json'));

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.json(newComment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});