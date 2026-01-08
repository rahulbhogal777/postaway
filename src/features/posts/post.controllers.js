import PostModel from "./post.model.js";
import UserModel from "../user/user.model.js";

export default class PostController {
    
    createPost(req, res) {
        const { caption } = req.body;
        const userId = req.userId;
        const imageUrl = req.file.filename;
        const newPost = PostModel.createPost(userId, caption, imageUrl);
        console.log(newPost);

        res.status(201).json({ success: true, msg: "Post created successfully", post: newPost });
    }

    getAllPosts(req, res) {
        const posts = PostModel.getAllPosts();
        res.status(200).json({
            success: true,
            msg: posts
        });
    }

    getPostById(req, res) {
        const id = parseInt(req.params.id);
        const post = PostModel.getPostById(id);
        if (!post) {
            res.status(404).json({ success: false, msg: "Post not found." });
        } else {
            res.status(200).json({
                success: true,
                msg: post
            });
        }
    }

    getPostByUserId(req, res) {
        const userId = req.userId;
        const posts = PostModel.getPostByUserId(userId);
        res.status(200).json({
            success: true,
            msg: posts
        });
    }

    deletePostById(req, res) {
        const id = parseInt(req.params.id);
        const userId = req.userId;
        const success = PostModel.deletePostById(id, userId);
        if (success == false) {
            res.status(404).json({
                success: false,
                msg: "Post not found."
            });
        } else if (success === 'forbidden') {
            res.status(403).json({
                success: false,
                msg: "you are not allowed to delete this post."
            });
        } else {
            res.status(200).json({
                success: true,
                msg: "Post deleted successfully."
            });
        }
    }

    updatePostById(req, res) {
        const id = parseInt(req.params.id);
        const userId = req.userId;
        const caption = req.body.caption || null;
        const imageUrl = req.file.filename || null;

        const updatePost = PostModel.updatePostById(id, caption, imageUrl, userId);
        if (updatePost === null) {
            res.status(404).json({
                success: false,
                msg: "Post not found."
            });
        } else if (updatePost === 'forbidden') {
            res.status(403).json({
                success: false,
                msg: "you are not allowed to update this post."
            });
        } else {
            res.status(200).json({ success: true, msg: "Post updated successfully.", post: updatePost });
        }
    }

    getPostByCaption(req, res) {
        const caption = req.body.caption;
        console.log(req.body);
        const result = PostModel.getPostByCaption(caption);
        console.log(result);
        if (!result) {
            return res.status(404).json({
                success: false,
                msg: 'Post is not found'
            });
        }
        res.status(200).json({ success: true, msg: result });
    }

    bookmarkPost(req, res) {
        const userId = req.userId;
        const id = parseInt(req.params.id);

        const result = UserModel.bookmark(userId, id);
        if (!result) {
            return res.status(404).json({
                success: false,
                msg: 'User is not found'
            })
        }
        res.status(200).json({
            success: true, 
            msg: result
        })
    }

}