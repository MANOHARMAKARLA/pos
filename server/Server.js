import express from 'express';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

//require('colors');

dotenv.config();

//Connect with MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err.message);
});

const app = express();



//Create Port 
const PORT = process.env.PORT || 9000;

//Listen
app.listen(PORT, () => {
    console.log(`Serve at running on the port: http://localhost:${PORT}`);
} )