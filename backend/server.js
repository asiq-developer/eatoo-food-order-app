import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


const app = express()
const port = 4000


app.use(express.json())
app.use(cors())

connectDB();


//api end points
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter )
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API WORking")
})

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})

//mongodb+srv://asiq:asiq123@cluster0.hb91job.mongodb.net/?