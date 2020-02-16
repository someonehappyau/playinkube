import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user = new Subject<any>();

  constructor(
    private http: HttpClient
  ) {
  }

  logoff(){
    this.user.next({nickname: ''});
  }

  login(user) {
    const params = new HttpParams()
      .set('username', user.username)
      .set('password', user.password);

    // this.user.next({uid: "1", username: 'john', nickname: 'John' });
    this.http.get('http://api.playinkube.com/user/login', {params}).subscribe((user) => {
      this.user.next(user);
    });
  }

  getUser(): Observable<any> {
    return this.user;
  }
}
