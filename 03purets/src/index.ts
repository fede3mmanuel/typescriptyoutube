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
    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ) {
    }
}

const hitesh = new User("h@h.com", "hitesh")
// hitesh.name