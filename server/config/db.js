import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected...!");
    } catch (error) {
        console.log("Database connection failed!");
        process.exit(1);
    }
}

export default connectToDb;