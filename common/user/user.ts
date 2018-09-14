export interface User {
    name: string;
}

export function User(name: string = "DefaultName") {
    return {
        name: name;
    }
}
