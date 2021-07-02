import express, { request, response } from 'express';
import { Recipes } from '../models/recipes.js';
const recipeRouter = express.Router();

recipeRouter.get('/', async (request, response) => {
    const recipes = await Recipes.find();
    response.send(recipes);
})

recipeRouter.post('/', async (request, response) => {
    const addRecipe = request.body;
    const recipe = new Recipes(addRecipe);
    try {
        const newRecipe = await recipe.save();
        response.send(newRecipe);
    } catch (err) {
        response.status(500);
        response.send(err);
    }
})

export default recipeRouter;