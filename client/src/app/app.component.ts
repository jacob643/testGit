import { Component, OnInit } from "@angular/core";
import { Message } from "../../../common/communication/message";
import { BasicService } from "./services/basic.service";
import { SocketService } from "./services/socket-service/socket.service";
import { UserService } from "./services/user-service/user.service";
import { createUser } from "../../../common/user/user";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    public constructor(private basicService: BasicService,
        private socketService: SocketService,
        private userService: UserService) { }

    public readonly title: string = "LOG2990";
    public message: string;

    private initIoConnection(): void {
        this.socketService.initSocket();
        this.socketService.clientSocket.on("connect", () => {
            this.userService.user = createUser("", this.socketService.clientSocket.id);
        });
    }

    public ngOnInit(): void {
        this.basicService.basicGet().subscribe((message: Message) => this.message = message.title + message.body);
        this.initIoConnection();
    }
}
