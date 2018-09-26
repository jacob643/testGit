import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    private readonly SERVER_URL: string = "http://localhost:3000/users";

    public initSocket(): any {
        return socketIo(this.SERVER_URL);
    }

    constructor() { }
}
