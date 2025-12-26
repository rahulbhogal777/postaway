

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

    static getAllPosts() {
        const result = posts;
        return result;
    }

    static getPostById(id) {
        const result = posts.find(post => post.id === id);
        return result;
    }

    static getPostByUserId(userId) {
        const result = posts.filter(post => post.userId === userId);
        return result;
    }

    static deletePostById(id) {
        const index = posts.findIndex(post => post.id === id);
        if (index === -1) {
            return false;
        } else {
            posts.splice(index, 1);
            return true;
        }
    }
}

let posts = [];