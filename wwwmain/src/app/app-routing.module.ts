import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./core/home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule) },
  { path: 'motorcycles', loadChildren: () => import('./modules/motorcycles/motorcycles.module').then(m => m.MotorcyclesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
