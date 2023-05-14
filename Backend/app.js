const express = require('express');
const multer = require('multer');
require('dotenv').config();
const { dbConnect } = require('./utils/database');

const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/auth');
const editRoutes = require('./routes/editRoutes');
const getRoutes = require('./routes/getRoutes');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().single('image')); // Add multer middleware here

app.use(postRoutes);
app.use(authRoutes);
app.use(editRoutes);
app.use(getRoutes);

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
