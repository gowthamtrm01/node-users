import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingerdients: [{
        type: String,
        required: true
    }],
    procedure: {
        type: String,
        required: true
    },
    hide: {
        type: Boolean,
        default: false
    },
    ingerdientsValue: {
        type: Boolean,
        default: false
    }
})

export const Recipes = mongoose.model('recipe', recipeSchema);