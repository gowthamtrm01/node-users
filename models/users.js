import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
});

export const User = mongoose.model("user", userSchema);