import express from 'express';
import mongoose from 'mongoose';
import config from './config';

const app = express()
const {MONGO_URI} = config;

app.use(hpp())
app.use(helmet()) //서버 보안 라이브러리

app.use(cors({origin: true, credentials:true}))
app.use(morgan("dev")) //개발로그 확인가능

app.use(express.json());


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
    })
    .then(() => console.log("MongoDB connection Success!!"))
    .catch((e) => console.log(e));

//Use routes
app.get('/')

export default app;