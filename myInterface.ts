interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleID?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitest: Admin = {
    dbId: 22,
    role: "admin"
    email: "h@h.com",
    userId: 12,
    githubToken: "github",
    startTrail: () => {
        return "start Trial"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}

hitest.email = "h@hc.com"
// hitest.dbId = 12