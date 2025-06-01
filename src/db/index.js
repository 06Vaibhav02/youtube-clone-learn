import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conneectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //appending database name
        // console.log(`\n MongoDB connected ${conneectionInstance.connection.host}`)     //in index.js
        return conneectionInstance.connection.host; 
    } catch (error) {
        // process.exit(1)   
        throw error; 
    }

}

export default connectDB;

