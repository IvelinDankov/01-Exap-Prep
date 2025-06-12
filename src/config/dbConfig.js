import mongoose from "mongoose";

async function initDatabase() {
  try {
    const url = "mongodb://localhost:27017";
    const dbName = "testDb";

    await mongoose.connect(url, { dbName: dbName });
    console.log(`${dbName} is successfully connected...`);
  } catch (err) {
    console.log(err.message);
    console.log(`${dbName} is not CONNECTED!!!`);
  }
}

export default initDatabase;
