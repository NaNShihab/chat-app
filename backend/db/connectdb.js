import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongodb")
    } catch (error) {
        console.log("Error connecting to mongodb", error)
    }
}

export default connectToMongoDB;