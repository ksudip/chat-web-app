import mongoose from "mongoose";

const connectTOMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("CONNECTED TO DATABASE");
    } catch (error) {
        console.log(" Error in connecting to database: ",error.message);
    }
};

export default connectTOMongoDB;