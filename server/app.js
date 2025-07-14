const express = require('express'); 
const cors = require('cors');
const authRoutes = require('./routes/auth');
const placesRoutes = require('./routes/places');
const usersRoutes = require('./routes/users');
const db = require('./models/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Проверка подключения к базе данных
db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Successfully connected to the database');
  }
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});