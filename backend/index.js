import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./Routes/UserRoute.js";
import { MongoClient } from "mongodb";

const app = express()
const port = 5000
const uri = 'mongodb+srv://dpDiag:dpDiag1818@cluster1.bn4cyd0.mongodb.net/'

mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connected...'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`Server running up on ${port}`))
