const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connect ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(error.response ? error.response.body : error);
    process.exit(1);
  }
};
module.exports = connectDB;
