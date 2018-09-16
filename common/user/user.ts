export interface User {
    name: string;
}

export function createUser(name: string = "DefaultName") {
    return {
        name: name
    }
}
