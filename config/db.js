/** @format */

const moongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    const db = await moongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected... " + db.connection.host);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

module.exports = connectDB;
