import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorcyclesRoutingModule } from './motorcycles-routing.module';
import { MotorcyclesComponent } from './motorcycles.component';


@NgModule({
  declarations: [MotorcyclesComponent],
  imports: [
    CommonModule,
    MotorcyclesRoutingModule
  ]
})
export class MotorcyclesModule { }
