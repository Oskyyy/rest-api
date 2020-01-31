const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "GET, POST, PUT, DELETE", 
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.use((req, res, next) => {
  res.send({ message: 'Not found' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static(path.join(__dirname, '/client/build')));

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});