import PostModel from "./post.model.js";

export default class PostController {
    
    createPost(req, res) {
        const { caption } = req.body;
        const userId = req.userId;
        const imageUrl = req.file.filename;
        const newPost = PostModel.createPost(userId, caption, imageUrl);
        res.status(201).json({ message: "Post created successfully", post: newPost });
    }
}