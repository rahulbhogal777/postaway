import LikeModel from "./like.model.js";

export default class LikeController {

    getAllLikes(req, res) {
        const postId = parseInt(req.params.postId);
        const likeCount = LikeModel.getAllLikes(postId);
        res.status(200).json({ postId: postId, likes: likeCount });
    }

    toggleLike(req, res) {
        const postId = parseInt(req.params.postId);
        const userId = req.userId;
        const result = LikeModel.toggleLike(userId, postId);
        res.status(200).json(result);
    }
    
}