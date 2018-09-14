import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { BasicService } from "./basic.service";
import { HttpClientModule } from "@angular/common/http";
import { GameDisplayComponent } from './game-display/game-display.component';
import { InitialViewComponent } from './inital-view/initial-view.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { AppRouterModule } from "./router/approuter.module";
import { GameMenuComponent } from './game-menu/game-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        StopwatchComponent,
        InitialViewComponent,
        GameDisplayComponent,
        InitialViewComponent,
        GameMenuComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRouterModule,
        FormsModule
    ],
    providers: [BasicService],
    bootstrap: [AppComponent]
})
export class AppModule { }
