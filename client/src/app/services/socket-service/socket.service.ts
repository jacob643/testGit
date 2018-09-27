import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    public clientSocket: any;

    private readonly SERVER_URL: string = "http://localhost:3000/users";

    public initSocket(): any {
        this.clientSocket = socketIo(this.SERVER_URL);
    }

    constructor() { }
}
