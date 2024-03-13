const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost/argentBankDB";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("=> mongoDB est connecté <=");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
