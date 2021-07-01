import express from 'express';
import { User } from "./../models/users.js";
export const router = express.Router();

router
    .route('/')
    .get(async (request, response) => {
        const users = await User.find()
        response.send(users)
    })
    .post(async (request, response) => {
        const addUser = request.body;
        const user = new User(addUser);
        try {
            const newUser = await user.save()
            response.send(newUser);
        } catch (err) {
            response.status(500);
            response.send(err);
        }

    })

router
    .route('/:id')
    .get(async (request, response) => {
        const { id } = request.params;
        const user = await User.find({ id: id })
        response.send(user);
    })
    .delete(async (request, response) => {
        const { id } = request.params;

        try {
            const user = await User.findById(id);
            await user.remove();
            response.send({ ...user, message: "deleted successfully" })
        } catch (err) {
            response.status(500);
            response.send(err);
        }
    })
