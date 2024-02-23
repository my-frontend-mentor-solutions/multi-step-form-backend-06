import express from 'express';
import mongoose from 'mongoose';
import PersonalInfo from './models/PersonalInfo.js';

const server = express();
const port = 8080;
const dburl = "mongodb+srv://rj02piyush:ThisisiNotesServer@inotes.aoxdcbi.mongodb.net/iNotes?retryWrites=true&w=majority";

mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => { 
    console.log(" sucessfully connected ")
}).catch((error) => {
    console.log(error + " connnecting to db ")
});

server.get("/uri", async (req, res, next) => {
    const ss = await PersonalInfo.create({
        name: "Piyush"
    })
    res.status(500).send("sfhsdhfsdhjsdfjhsdfjkhsdjksdfhkjlasdhkljsdfhjkasdhjsdkjsdsdjgasdfjhsdf");
});

server.listen(port, () => {
    console.log("server running sucessfully");
});