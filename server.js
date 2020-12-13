import express from "express";
import mongoose from "mongoose";
//import cors from 'cors';
//import data from './data.js';
import videos from './dbModel.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT
const db = process.env.DB_HOST
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.json());
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
