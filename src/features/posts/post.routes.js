import express from 'express';
import PostController from './post.controllers.js';
import { upload } from '../../middlewares/fileUpload.js';

const postController = new PostController();

const postRoputer = express.Router();

postRoputer.post('/create',upload.single('imageUrl') ,(req, res) => postController.createPost(req, res));

export default postRoputer;