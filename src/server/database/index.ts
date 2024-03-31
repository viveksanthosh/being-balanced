import mongoose from "mongoose";

const mongoHost = process.env.MONGODB_HOST;
const dbName = process.env.DB_NAME;

mongoose
  .connect(`${mongoHost}/${dbName}`)
  .then(() => console.log("Connected!"));
