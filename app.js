const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Home route');
});

app.get('/todo-list', (req, res) => {
  res.send('Todo list route');
});

app.listen(3000);