const e = require('express');
const m = require('mongoose');
m.connect('mongodb://localhost:27017/test');
const B = m.model('Book', new m.Schema({ title: String }));

const a = e();
a.use(e.json());

a.get('/books', async (r, s) => s.json(await B.find()));
a.post('/books', async (r, s) => s.json(await B.create(r.body)));
a.put('/books/:id', async (r, s) => s.json(await B.findByIdAndUpdate(r.params.id, r.body)));
a.delete('/books/:id', async (r, s) => s.json(await B.findByIdAndDelete(r.params.id)));

a.listen(3000, () => console.log('Ready'));
