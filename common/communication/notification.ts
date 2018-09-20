export interface Notification {
    text: string;
    status: number;
}

export const ERROR: number = 0;
export const WARNING: number = 1;
export const OK: number = 2;

export function createNotification(text = "", status = ERROR): Notification {
    return {
        this.text = text
        this.status = status
    }
}
