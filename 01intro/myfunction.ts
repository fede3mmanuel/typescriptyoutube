function addTwo(num: number): number {
    return num + 2
    //return 'hello'
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myvalue = addTwo(5)

getUpper("4")

signUpUser("Fede","fede@fede.website", false)

loginUser("h", "h@h.cm")

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         true
//     }
//     return "200 ok"
// }

const getHello = (s: String): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map((hero: string): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);    
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}