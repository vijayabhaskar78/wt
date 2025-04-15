const express = require('express');
const app = express();
let books = [{id: 1, title: 'Node.js Basics'}];

app.use(express.json());
app.use(express.static('.')); // ⬅️ Serves index.html from current directory

app.route('/books')
  .get((req, res) => res.json(books))
  .post((req, res) => {
    books.push({ ...req.body, id: books.length + 1 });
    res.status(201).send();
  });

app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3000);
