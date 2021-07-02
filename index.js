import express, { request, response } from "express";
import mongoose from "mongoose";
import recipeRouter from './routers/recipes.js';
import { router } from './routers/users.js';
import bcrypt from 'bcrypt';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

const url = process.env.MONGO_URL || "mongodb://localhost/movieData";

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on('open', () => console.log('Mongodb is connected'));

app.use('/users', router);
app.use('/recipes', recipeRouter);

app.get('/', (request, response) => {
    response.send("Welcome to users");
})



async function getHash() {
    const password = 'password@123';
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt)
    console.log(salt, passwordHash);
    const match = await bcrypt.compare(password, passwordHash);
    if (!match) {
        console.log('failed')
    } else {
        console.log('successfully login')
    }
}

getHash();

app.listen(PORT, () => console.log(`Server was started ${PORT}`));