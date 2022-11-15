// const User = {
//     name: "hitesh",
//     email: "fede@fede.website",
//     isActive: false
// }

// function createUser ({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com" }

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


type User = {
    name: string;
    email: string;
    isActive: Boolean
}

function createUser(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})

export {}