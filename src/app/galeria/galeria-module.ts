import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing-module';
import { GaleriaComponent } from './galeria-component/galeria-component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    FormsModule
  ]
})
export class GaleriaModule { }
