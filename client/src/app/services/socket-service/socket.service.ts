import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Message } from "../../../../../common/communication/message";
import { Event } from "../../../../../common/communication/event";

import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }
}
