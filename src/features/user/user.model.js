
export default class UserModel{
    constructor(id ,name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }


    static signUp(name, email, password) {
        const id = users.length + 100;
        const user = new UserModel(id, name, email, password);
        users.push(user);
    }

    static signIn(email, password) {
        const result =users.find(user => user.email === email && user.password === password);
        return result; 
    }

    static getAllUsers() {
        return users;
    }
    
}

let users = [
    new UserModel( 100, 'Rahul Bhogal', 'rahulbhogal@gmail.com', 'rahul123'),
    new UserModel(101, 'John Doe', 'johndoe@gmail.com', 'johndoe123') 
];