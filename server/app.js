import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from "morgan";
import mongoose from 'mongoose';
import config from './config';
import postRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";

const app = express()
app.use(helmet) //서버 보안 라이브러리
app.use(hpp())

const {MONGO_URI} = config;

app.use(cors({origin: true, credentials:true}))
app.use(morgan("dev")) //개발로그 확인가능

app.use(express.json());


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex :true, 
    })
    .then(() => console.log("MongoDB connection Success!!"))
    .catch((e) => console.log(e));

//Use routes
app.get('/')
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

export default app;