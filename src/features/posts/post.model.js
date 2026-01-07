

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

    static deletePostById(id, userId) {
        const post = posts.find(post => post.id === id);
        if (!post) {
            return false;
        } else if (post.userId !== userId) {
            return 'forbidden';
        } else {
            const index = posts.findIndex(post => post.id === id);
            posts.splice(index, 1);
            return true;
        }
    }

    static updatePostById(id, caption, imageUrl, userId){
        const post = posts.find(post => post.id === id); 
        if (!post) {
            return null;
        }
        if (post.userId !== userId) {
            return 'forbidden';
        } 
        const index = posts.findIndex(post => post.id === id);
        const updatePost = posts[index];
        updatePost.caption = caption || updatePost.caption;
        updatePost.imageUrl = imageUrl || updatePost.imageUrl;
        posts[index] = updatePost;
        return updatePost; 
    }

    static getPostByCaption(caption) {
        const index = posts.findIndex((post) => post.caption === caption);
        console.log("index :" + index);
        if (index === -1) {
            return false;
        }
        return posts[index];
    }
}

let posts = [];