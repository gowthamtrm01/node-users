import express from "express";
import mongoose from "mongoose";
import recipeRouter from './routers/recipes.js';
import { router } from './routers/users.js';
const app = express();
const PORT = 5000;

app.use(express.json())

const url = "mongodb+srv://gowtham:Saipallavi@0102@cluster0.wbk9z.mongodb.net/movieData";

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on('open', () => console.log('Mongodb is connected'));

app.use('/users', router);
app.use('/recipes', recipeRouter);

app.listen(PORT, () => console.log(`Server was started ${PORT}`));