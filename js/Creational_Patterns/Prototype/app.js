"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let user = new UserHistory('admin@admin.com', 'Eugene');
console.log(user);
let user2 = user.clone();
user2.email = "user@user.com";
console.log(user2);
console.log(user2);
