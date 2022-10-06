import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('isAuthenticated');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('isAuthenticated')
  }

  getUser() {
    let user = sessionStorage.getItem('isAuthenticated');
    return user;
  }
}
