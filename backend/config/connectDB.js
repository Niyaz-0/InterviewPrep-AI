import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {});
        console.log("Database connected successfully...");
    }
    catch(err) {
        console.log("Failed to connect DB: ", err);
        process.exit(1)
    }
}