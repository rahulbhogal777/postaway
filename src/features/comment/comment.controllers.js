import CommentModel from "./comment.model.js";

export default class CommentController{

    createComment(req, res) {
        const postId = parseInt(req.params.postId);
        const userId = req.userId;
        const content = req.body.content;
        const result = CommentModel.addComment(userId, postId, content);
        res.status(200).json({success: true, meg: result});
    }

    getComment(req, res) {
        const postId = parseInt(req.params.postId);
        const result = CommentModel.getByPostId(postId);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Post is not found' });
        }
        res.status(200).json({ success: true, msg: result });
    }

    deleteComment(req, res) {
        const commentId = parseInt(req.params.commentId);
        const result = CommentModel.deleteByCommentId(commentId);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Comment is not found' });
        }
        res.status(200).json({ success: true, msg: 'Comment is deleted successfully' });
    }

    updateCommnet(req, res) {
        const commentId = parseInt(req.params.commentId);
        const content = req.body.content;
        const result = CommentModel.updateByCommentId(commentId, content);
        if (!result) {
            return res.status(404).json({ success: false, msg: 'Comment is not found' });
        }
        res.status(200).json({ success: true, msg: result });
    }
}