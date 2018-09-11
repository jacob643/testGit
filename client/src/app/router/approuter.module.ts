import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialViewComponent } from '../inital-view/initial-view.component'
import { GameDisplayComponent } from '../game-display/game-display.component'

export const routes: Routes = [
    { path: '', redirectTo: 'initial', pathMatch: 'full' },
    { path: 'initial', component: InitialViewComponent },
    { path: 'gamelist', component: GameDisplayComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
