import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialViewComponent } from '../inital-view/initial-view.component'

export const routes: Routes = [
    { path: '', redirectTo: 'initial', pathMatch: 'full' },
    { path: 'initial', component: InitialViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
