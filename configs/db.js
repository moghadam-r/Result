const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect("mongodb://localhost:27017/resultExam");
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection has error ->", err);
  }
};

export default connectToDB;
