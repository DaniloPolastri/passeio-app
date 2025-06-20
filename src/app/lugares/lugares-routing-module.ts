import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LugaresComponent} from './lugares-component/lugares-component';

const routes: Routes = [
  {
    path: '',
    component:LugaresComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugaresRoutingModule { }
