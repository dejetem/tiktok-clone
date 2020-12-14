import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import cool from 'cool-ascii-faces';
//import data from './data.js';
import videos from './dbModel.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT
const db = process.env.DB_HOST
app.use(express.json());
app.use(cors());
app.use((req,res,next) => {
    res.setHeader("Allow-Control-Allow-Origin", "*");
    res.setHeader("Allow-Control-Allow-Headers", "*");
    next();
}) 
/*const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }*/

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


app.get('/',(req,res) => 
  res.status(200).send('Hello tik tok'));

app.get('/cool',(req,res) => 
  res.status(200).send('Hello tik tok'));

/*app.get('/v1/posts',cors(corsOptions),(req,res) => 
  res.status(200).send(data));*/

app.post('/v2/posts',(req,res) => {
    const dbVideos =req.body
    videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else{
            res.status(201).send(data);
        }
    })
});

app.get('/v2/posts',(req,res) => {
    videos.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    })
})

app.listen(port, () => console.log(`App listenning to port ${port}`));
//xrzhnVDcPJnoOFhd
