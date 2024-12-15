
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://mongo:mongo@mongo-cluster.w3hco.mongodb.net/myDatabase';
    await mongoose.connect(mongoURI);

    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;