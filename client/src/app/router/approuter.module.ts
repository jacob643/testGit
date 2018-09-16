import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialViewComponent } from '../inital-view/initial-view.component'
import { GameMenuComponent } from '../game-menu/game-menu.component'
import { AdminViewComponent } from '../admin-view/admin-view.component'

export const routes: Routes = [
    { path: '', redirectTo: 'initial', pathMatch: 'full' },
    { path: 'initial', component: InitialViewComponent },
    { path: 'gamelist', component: GameMenuComponent},
    { path: 'admin', component: AdminViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
