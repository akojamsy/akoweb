import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected successfully");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default connect;
