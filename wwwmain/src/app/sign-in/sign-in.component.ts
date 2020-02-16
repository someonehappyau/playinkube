import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  login(username, password){
    this.userService.login({username: username, password: password});
  }

}
