import { Component, OnInit } from "@angular/core";
import { Message } from "../../../common/communication/message";
import { BasicService } from "./services/basic.service";
import { SocketService } from "./services/socket-service/socket.service";
import { Event } from "../../../common/communication/event";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    public constructor(private basicService: BasicService,
        private socketService: SocketService) { }

    private ioConnection: any;
    public readonly title: string = "LOG2990";
    public message: string;

    private initIoConnection(): void {
        this.socketService.initSocket();

        this.ioConnection = this.socketService.onMessage().subscribe((message: Message) => {
            this.message = message.title + message.body;
        });

        this.socketService.onEvent(Event.CONNECT).subscribe( () => {
            //Console log for debugging purposes only
            //console.log('connected');
        });

        this.ioConnection;
    }

    public ngOnInit(): void {
        this.basicService.basicGet().subscribe((message: Message) => this.message = message.title + message.body);
        this.initIoConnection();
    }
}
