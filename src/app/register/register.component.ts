import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }
  
  user: User;
  invalidRegistration = false;
  passwordMatch = 0;

  constructor(
    private router: Router,
    private userService: UserService) {
    this.user = new User();
   }

   onSubmit() {
      this.userService.register(this.user).subscribe(
        response => {
          if(response === true) {
            this.router.navigate(['login'])
          }
        },
        error => {
          console.log(error);
          this.invalidRegistration = true;
        });
   }

   isPasswordMatch(value: string): void {
    
    if(this.user.password === value) {  
      this.passwordMatch = 1;
    } else {
      this.passwordMatch = 0;
    }
    console.log(this.passwordMatch);
  }
}
