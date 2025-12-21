import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

export default class UserController {

    signUp(req, res, next) {
        const { name, email, password } = req.body;
        const user = UserModel.signUp(name, email, password);
        console.log(user);
        res.status(201).send("User signed up successfully");
    }

    signIn(req, res, next) {
        const { email, password } = req.body;
        const user = UserModel.signIn(email, password);
        if (user) {
            const token = jwt.sign({ userId: user.id },'cacd7d1b31d5ce0776e23478143d19d3c088196d', { expiresIn: '1h' });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }

    getAllUsers(req, res, next) {
        const users = UserModel.getAllUsers();
        res.status(200).json(users);
    }

}
