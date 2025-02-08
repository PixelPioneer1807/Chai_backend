import mongoose from "mongoose";
import dotenv from "dotenv";  // Ensure dotenv is loaded
dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(" MONGODB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
