import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
