

export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static addComment(userId, postId, content) {
        const id = comments.length + 400;
        const newComment = new CommentModel(id, userId, postId, content);
        comments.push(newComment);
        return newComment;
    }

    static getByPostId(postId) {
        const comment = comments.filter((comment) => comment.postId === postId);
        if (comment.length === 0) {
            return false;
        } 
        return comment;      
    }

    static deleteByCommentId(commentId) {
        const index = comments.findIndex((comment) => comment.id === commentId);
        if (index === -1) {
            return false;
        } 
        comments.splice(index, 1);
        return true;
    }

    static updateByCommentId(commentId, content) {
        const index = comments.findIndex((comment) => comment.id === commentId);
        if (index === -1) {
            return false;
        } 
        comments[index].content = content || comments[index].content;
        return comments[index];
    }
}

let comments = [];