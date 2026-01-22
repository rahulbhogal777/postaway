
export default class UserModel{
    constructor(id ,name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.bookmark = [];
    }


    static signUp(name, email, password) {
        const id = users.length + 100;
        const user = new UserModel(id, name, email, password);
        users.push(user);
    }

    static signIn(email, password) {
        const result = users.find(user => user.email === email && user.password === password);
        return result; 
    }

    static getAllUsers() {
        return users;
    }

    static bookmark(userId, postId) {
        const index = users.findIndex((user) => user.id === userId);
        if (index === -1) {
            return false;
        }
        if (!users[index].bookmark.includes(postId)) {
            users[index].bookmark.push(postId);
        }
        return users[index];
    }
    
}

let users = [
    new UserModel( 100, 'Rahul Bhogal', 'rahulbhogal@gmail.com', 'rahul123'),
    new UserModel(101, 'John Doe', 'johndoe@gmail.com', 'johndoe123') 
];