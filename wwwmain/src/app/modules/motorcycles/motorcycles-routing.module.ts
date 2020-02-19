import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorcyclesComponent } from './motorcycles.component';

const routes: Routes = [{ path: '', component: MotorcyclesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorcyclesRoutingModule { }
