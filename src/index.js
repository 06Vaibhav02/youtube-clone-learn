import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

//dotenv modules stores enviroment variables in process.env
dotenv.config(
    {
        path: "./.env"
    }
)

const PORT = process.env.PORT || 7000;


connectDB()
    .then((value) => {
        console.log(`Connected to host - ${value}`)
        app.listen(PORT, () => {
            console.log(`Listening at ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection error", error)
    })







