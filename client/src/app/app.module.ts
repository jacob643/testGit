import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { AppRouterModule } from "./router/approuter.module";

import { AppComponent } from "./app.component";
import { AdminViewComponent } from './admin-view/admin-view.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { InitialViewComponent } from './inital-view/initial-view.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { NotificationComponent } from './notification/notification.component'
import { StartGameComponent } from './start-game/start-game.component';

import { UserService } from './services/user-service/user.service';
import { NotificationService } from './services/notification/notification.service';
import { GameService } from './services/game.service';
import { ErrorsHandler } from './services/errorhandler/errorhandler.service';
import { SocketService } from './services/socket-service/socket.service'

@NgModule({
    declarations: [
        AppComponent,
        AdminViewComponent,
        StopwatchComponent,
        InitialViewComponent,
        GameDisplayComponent,
        InitialViewComponent,
        GameMenuComponent,
        AdminViewComponent,
        NotificationComponent,
        StartGameComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRouterModule,
        FormsModule
    ],
    providers: [
        UserService,
        GameService,
        {
            provide: ErrorHandler,
            useClass: ErrorsHandler,
        },
        NotificationService,
        SocketService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
