const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const Patient = mongoose.model('Patient', { name: String, age: Number, disease: String });

const app = express();
app.use(express.json());

app.post('/patients', (r, s) => new Patient(r.body).save().then(x => s.send(x)));
app.get('/patients', (r, s) => Patient.find().then(x => s.send(x)));
app.route('/patients/:id')
  .get((r, s) => Patient.findById(r.params.id).then(x => s.send(x)))
  .put((r, s) => Patient.findByIdAndUpdate(r.params.id, r.body, { new: true }).then(x => s.send(x)))
  .delete((r, s) => {
    console.log('Deleting patient with ID:', r.params.id);
    return Patient.findByIdAndDelete(r.params.id)
      .then(result => {
        console.log('Delete result:', result);
        s.send('Deleted');
      })
      .catch(err => {
        console.error('Delete error:', err);
        s.status(500).send('Error: ' + err.message);
      });
  });

app.listen(3001, () => console.log('Server running on port 3001'));
