import express from 'express';
import userRouter from './src/features/user/user.routes.js';
import postRoputer from './src/features/posts/post.routes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/posts', postRoputer);

export default app;