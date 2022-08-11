import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true})); //!To add pictures
app.use(bodyParser.urlencoded({limit:"30mb",extended:true})); // tasveery add krli uski limit 30 mb
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://mern:mern123@cluster0.0kti9zy.mongodb.net/?retryWrites=true&w=majority'; //atlas connection
const PORT = process.env.PORT || 5000; // Port connection
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}) // Parameters are for erroes and Warnings but not necesary   
.then(()=>app.listen(PORT,()=>console.log(`Server running on port : ${PORT}`)))// Agar Connection stable hua to ..
.catch((error)=>console.log(error.message)); //Connection Not Successful
//mongoose.set("useFindAndModify", false); //for not getting warning in console 
