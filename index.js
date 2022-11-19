const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const port = process.env.PORT || 8000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);
const goalRoutes = require("./routes/goalsRoute");

app.use("/api", goalRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
