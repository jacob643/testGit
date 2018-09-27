// tslint:disable:no-any les attributs sont des types any
// tslint:disable:no-floating-promises pour le before each
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRouterModule } from "./router/approuter.module";
import { InitialViewComponent } from "./inital-view/initial-view.component"
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { GameMenuComponent } from './game-menu/game-menu.component';
import { GameDisplayComponent } from './game-display/game-display.component';

describe("AppComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                InitialViewComponent,
                GameMenuComponent,
                GameDisplayComponent
            ],
            imports: [HttpClientModule, AppRouterModule, FormsModule],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
        }).compileComponents();
    }));
});
