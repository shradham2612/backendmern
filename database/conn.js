import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    "mongodb+srv://admin:admin123@quiz.mzapx6p.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database connected to mongo");
}


