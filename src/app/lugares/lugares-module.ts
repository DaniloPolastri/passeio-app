import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing-module';
import { LugaresComponent } from './lugares-component/lugares-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LugaresComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LugaresModule { }
