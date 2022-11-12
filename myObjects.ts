const User = {
    name: "hitesh",
    email: "fede@fede.website",
    isActive: false
}

function createUser ({name: string, isPaid: boolean}){}

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com" }

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

export {}