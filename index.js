const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const goalRoutes = require('./routes/goalsRoute');

app.use('/api', goalRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));