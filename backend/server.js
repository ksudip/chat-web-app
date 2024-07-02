import express from "express";
import dotenv from "dotenv";
// import cors from "cors";

import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectTOMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;


// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/',(req,res)=>{
//     // root http://localhost:5000
//     res.send("hello world");
// });


app.listen(PORT, ()=> {
    connectTOMongoDB();
    console.log(`server is running on ${PORT}`);
});
