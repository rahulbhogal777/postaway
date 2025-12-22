

export default class PostModel {
    constructor(id, userId, caption, imageUrl) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    } 

    static createPost(userId, caption, imageUrl) {
        const id = posts.length + 200;
        const newPost = new PostModel(id, userId, caption, imageUrl);
        posts.push(newPost);
        return newPost;
    }
}

let posts = [];