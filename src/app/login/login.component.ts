import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId = ''
  password = ''

  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  registrationError : any;

  constructor(private router: Router, private userService : UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {

    this.userService.login(this.loginId, this.password).subscribe(response => {
      if (response === true) {
        sessionStorage.setItem('isAuthenticated', this.loginId)
        this.router.navigate(['tweets',this.loginId])
        this.invalidLogin = false
      }
    },
    error => {
      console.log(error);
      this.registrationError = error;
      this.invalidLogin = true
    })           

  }

}
