
export default class UserModel{
    constructor(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }


    static signUp(name, email, password) {
        const user = new UserModel(name, email, password);
        user.id = users.length() + 1;
        users.push(user);
    }

    
}

let users = []