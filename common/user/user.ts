export interface User {
    name: string;
    socketId: string;
}

export function createUser(name: string = "DefaultName", socketId: string = "DefaultId") {
    return {
        name: name,
        socketId: socketId
    }
}
