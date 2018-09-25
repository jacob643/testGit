import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Message } from "../../../../../common/communication/message";

import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    private readonly SERVER_URL: string = "http://localhost:3000/users";

    private socket: any;

    public initSocket(): void {
        this.socket = socketIo(this.SERVER_URL);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }


    constructor() { }
}
