import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {SignInComponent} from "./sign-in/sign-in.component";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class UserModule { }
