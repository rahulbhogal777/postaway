import PostModel from "./post.model.js";

export default class PostController {
    
    createPost(req, res) {
        const { caption } = req.body;
        const userId = req.userId;
        const imageUrl = req.file.filename;
        const newPost = PostModel.createPost(userId, caption, imageUrl);
        res.status(201).json({ message: "Post created successfully", post: newPost });
    }

    getAllPosts(req, res) {
        const posts = PostModel.getAllPosts();
        res.status(200).json({ posts });
    }

    getPostById(req, res) {
        const id = parseInt(req.params.id);
        const post = PostModel.getPostById(id);
        if (!post) {
            res.status(404).json({ message: "Post not found." });
        } else {
            res.status(200).json({ post });
        }
    }

    getPostByUserId(req, res) {
        const userId = req.userId;
        const posts = PostModel.getPostByUserId(userId);
        res.status(200).json({ posts });
    }

    deletePostById(req, res) {
        const id = parseInt(req.params.id);
        const success = PostModel.deletePostById(id);
        if (!success) {
            res.status(404).json({ message: "Post not found." });
        } else {
            res.status(200).json({ message: "Post deleted successfully." });
        }
    }
}