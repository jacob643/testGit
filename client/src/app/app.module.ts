import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BasicService } from "./basic.service";
import { HttpClientModule } from "@angular/common/http";
import { GameDisplayComponent } from './game-display/game-display.component';
import { AppRouterModule } from "./router/approuter.module";

@NgModule({
    declarations: [
        AppComponent,
        GameDisplayComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRouterModule
    ],
    providers: [BasicService],
    bootstrap: [AppComponent]
})
export class AppModule { }
