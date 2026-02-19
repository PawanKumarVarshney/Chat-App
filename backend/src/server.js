import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import aurtRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

const app=express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth",aurtRoutes);
app.use("/api/messages",messageRoutes);




app.listen(PORT,()=>console.log
(`server is running on PORT : ${PORT}`));