import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${mongooseConnection.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
