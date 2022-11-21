"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteTocken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course Count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
const hitesh = new User("h@h.com", "hitesh");
// hitesh.name
