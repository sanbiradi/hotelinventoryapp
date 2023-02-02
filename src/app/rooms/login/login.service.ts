import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() {}
  addLogin(email: string, password: string) {
    if (email == 'admin@gmail.com' && password == 'admin123') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email == 'user@gmail.com' && password == 'user123') {
      this.isLoggedIn = true;
      this.isAdmin = false;
      console.log(this.isAdmin)
    }
    return this.isLoggedIn;
  }
}
