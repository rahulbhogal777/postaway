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
        const userId = req.userId;
        const success = PostModel.deletePostById(id, userId);
        if (success == false) {
            res.status(404).json({ message: "Post not found." });
        } else if (success === 'forbidden') {
            res.status(403).json({ message: "you are not allowed to delete this post." });
        } else {
            res.status(200).json({ message: "Post deleted successfully." });
        }
    }

    updatePostById(req, res) {
        const id = parseInt(req.params.id);
        const userId = req.userId;
        const caption = req.body.caption || null;
        const imageUrl = req.file.filename || null;

        const updatePost = PostModel.updatePostById(id, caption, imageUrl, userId);
        if (updatePost === null) {
            res.status(404).json({ message: "Post not found." });
        } else if (updatePost === 'forbidden') {
            res.status(403).json({ message: "you are not allowed to update this post." });
        } else {
            res.status(200).json({ message: "Post updated successfully.", post: updatePost });
        }
    }

    getPostByCaption(req, res) {
        const caption = req.body.caption;
        const result = PostModel.getPostByCaption(caption);
        if (!result) {
            return res.status(404).json({
                success: true,
                msg: 'Post is not found'
            });
        }
        res.status(200).json({ success: true, msg: result });
    }

}