interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleID?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const hitest: User = {
    dbId: 22,
    email: "h@h.com",
    userId: 12,
    startTrail: () => {
        return "start Trial"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}

hitest.email = "h@hc.com"
// hitest.dbId = 12