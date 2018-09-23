import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Message } from "../../../../../common/communication/message";
import { Event } from "../../../../../common/communication/event";

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    private socket: any;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<Event> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }

    constructor() { }
}
