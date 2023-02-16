import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//const mongoose = require('mongoose');
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express()

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017/memories';
const PORT = process.env.PORT || 5000;

//kiem tra ket noi 
mongoose.connect(CONNECTION_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})  
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch(() => console.log(error.message));
//dam bao la khong co 1 canh bao nao trong console
//mongoose.set('useFindAndModify',false);

