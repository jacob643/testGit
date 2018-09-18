import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDisplayComponent } from '../game-display/game-display.component';
import { GameService } from '../services/game.service';
import { HttpClientModule } from "@angular/common/http";
import { AdminViewComponent } from './admin-view.component';

describe('AdminViewComponent', () => {
    let component: AdminViewComponent;
    let fixture: ComponentFixture<AdminViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminViewComponent,
                          GameDisplayComponent],
            providers: [GameService],
            imports: [
                HttpClientModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
