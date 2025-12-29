
export default class LikeModel {
    constructor(id, userId, postId) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }

    static getAllLikes(postId) {
        const postLikes = likes.filter(like => like.postId === postId);
        return postLikes.length;
    }

    static toggleLike(userId, postId) {
        const existingLike = likes.find(like => like.userId === userId && like.postId === postId);
        if (existingLike) {
            likes = likes.filter(like => like !== existingLike);
            return { message: "Like removed." };
        } else {
            const id = likes.length + 300;
            const newLike = new LikeModel(id, userId, postId);
            likes.push(newLike);
            return { message: "Like added." };
        }
    }

    

    
}

let likes = [];