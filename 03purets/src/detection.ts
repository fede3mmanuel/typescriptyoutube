function detectTypes(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log('Prlease provide an id');
        return
    }
    id.toLowerCase()
}