import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitalViewComponent } from '../inital-view/inital-view.component'

export const routes: Routes = [
    { path: '', redirectTo: 'initial', pathMatch: 'full' },
    { path: 'initial', component: InitalViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
