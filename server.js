const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
userRoutes = require('./routes/userRoutes')

const app = express();

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());

app.use('/api/users', userRoutes)

// Use a default port of 3000, but allow it to be overridden by an environment variable
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


