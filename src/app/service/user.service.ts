import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'https://zarrouk-backend.herokuapp.com/api/users';
  constructor(private httpClient: HttpClient) { }

  addUser(user: any) {
    return this.httpClient.post(this.userUrl, user);
  }
  login(user: any) {
    return this.httpClient.post<any>('https://zarrouk-backend.herokuapp.com/login', user);

  }
}
