export interface Score {
    id: Number;
    name: string;
    time: string;
}

export function createScore(id = 0, name = "defaultName", time = "0"): Score {
    return { id: id, name: name, time: time };
}
