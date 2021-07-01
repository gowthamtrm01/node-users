import express from 'express';
import { Recipes } from '../models/recipes.js';
const recipeRouter = express.Router();

recipeRouter.get('/', async (request, response) => {
    const recipes = await Recipes.find();
    response.send(recipes);
})

export default recipeRouter;