import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user={nickname: ''};
  subscription: Subscription;

  constructor(
    private userService: UserService
  ) {
    this.subscription = userService.getUser().subscribe(user => {this.user=user; console.log(user);});
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logoff(){
    this.userService.logoff();
  }

  signin(){

  }
}
