import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

//middlewares

//adding a middleware which controls unauthorized access using cors module
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

//parse JSON object to Object
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

app.use(cookieParser())


//import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"

//routes
app.use("/api/v1/healthcheck", healthcheckRouter)
//if request hit on this route pass control to healthcheckRouter


export { app }

/*
In app.js 
    -we create express app  
    -we create cors and some basic middlewares using app.use()
    -export created app

*/