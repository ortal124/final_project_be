
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.DB_CONNECT) {
      throw("DB_CONNECT is not defined in .env file");
    } else {
      await mongoose.connect(process.env.DB_CONNECT) ;
      console.log('MongoDB connected');
    }
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;