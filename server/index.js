require('dotenv').config() // Secures variables
const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URI } = require('./constants')
const authRoutes = require('./routes/auth')

const app = express();

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }))
app.get('/healthz', (req, res) => res.status(200).send())
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port: ${PORT}`)
})
