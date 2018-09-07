import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BasicService } from "./basic.service";
import { HttpClientModule } from "@angular/common/http";
import { InitalViewComponent } from './inital-view/inital-view.component';
import { AppRouterModule } from "./router/approuter.module";

@NgModule({
    declarations: [
        AppComponent,
        InitalViewComponent
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
