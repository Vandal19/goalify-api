const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);
const goalRoutes = require("./routes/goalsRoute");

app.use("/api", goalRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
