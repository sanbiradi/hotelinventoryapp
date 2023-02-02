import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import {Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: any = '';
  password: any = '';
  constructor(private route:Router,private loginService:LoginService){
    
  }
  login() {
    if (this.loginService.addLogin(this.email,this.password)) {
      // alert('login successfully**');
      // this.route.navigate(["/rooms",'add']);
      this.route.navigateByUrl("/rooms")
    }else{
      alert('login failed**');
    }
  }
}
