import { Component, OnInit, OnDestroy } from "@angular/core";
import { Message } from "../../../common/communication/message";
import { BasicService } from "./services/basic.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
    public constructor(private basicService: BasicService) { }

    public readonly title: string = "LOG2990";
    public message: string;

    public ngOnInit(): void {
        this.basicService.basicGet().subscribe((message: Message) => this.message = message.title + message.body);
    }

    public ngOnDestroy(): void {

    }
}
