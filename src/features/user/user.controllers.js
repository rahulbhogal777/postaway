import UserModel from "./user.model.js";

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
            res.status(200).json({ message: "Sign-in successful", user: user });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }

    getAllUsers(req, res, next) {
        const users = UserModel.getAllUsers();
        res.status(200).json(users);
    }

}
