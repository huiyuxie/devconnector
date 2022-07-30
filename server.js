const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));