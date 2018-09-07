import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialViewComponent } from '../inital-view/initial-view.component'

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: InitialViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
