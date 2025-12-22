import express from 'express';
import userRouter from './src/features/user/user.routes.js';
import postRoputer from './src/features/posts/post.routes.js';
import jwtMiddleware from './src/middlewares/jwtAuth.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('uploads'));

app.use('/api/users', userRouter);
app.use('/api/posts', jwtMiddleware, postRoputer);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
})

export default app;