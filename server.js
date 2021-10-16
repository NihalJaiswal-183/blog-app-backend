import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//for images


//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = process.env.PORT || 8000;


const URL = `mongodb://nihaljaiswal:codeforinterview@blog-web-shard-00-00.z7lfc.mongodb.net:27017,blog-web-shard-00-01.z7lfc.mongodb.net:27017,blog-web-shard-00-02.z7lfc.mongodb.net:27017/BLOG-WEBSITE?ssl=true&replicaSet=atlas-z8ysjx-shard-0&authSource=admin&retryWrites=true&w=majority`
Connection(process.env.MONOGODB_URI || URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));