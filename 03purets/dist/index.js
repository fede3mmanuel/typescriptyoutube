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
        this.city = "Jaipur";
    }
}
const hitesh = new User("h@h.com", "hitesh");
// hitesh.name
