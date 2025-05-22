const express = require('express');

const app = express(); // Création de l'application express

// Route GET pour "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
