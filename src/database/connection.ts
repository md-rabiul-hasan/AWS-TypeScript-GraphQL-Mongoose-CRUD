import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const uri = 'mongodb+srv://scalablybackend:hello2441139@cluster0.h0d2ahn.mongodb.net/scalablylab';

    await mongoose.connect(uri);

    console.log('MongoDB connection successful');
  } catch (err) {
    console.log('MongoDB connection error:', err);
  }
};

export default connectDB;
