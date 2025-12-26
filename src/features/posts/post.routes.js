import express from 'express';
import PostController from './post.controllers.js';
import { upload } from '../../middlewares/fileUpload.js';

const postController = new PostController();

const postRoputer = express.Router();

postRoputer.post('/create', upload.single('imageUrl'), (req, res) => postController.createPost(req, res));
postRoputer.get('/all', (req, res) => postController.getAllPosts(req, res));
postRoputer.get('/', (req, res) => postController.getPostByUserId(req, res));
postRoputer.get('/:id', (req, res) => postController.getPostById(req, res));
postRoputer.delete('/:id', (req, res) => postController.deletePostById(req, res));

export default postRoputer;