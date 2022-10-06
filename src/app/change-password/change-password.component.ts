import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  loginId = ''
  newPassword = ''
  confirmPassword = ''

  errorBool=false;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  updatePassword() {
    this.service.updatePassword(this.loginId, this.newPassword).subscribe(response => {
      if(response === true){
        this.errorBool= false
        this.router.navigate(['login'])
      } else {
        this.errorBool= true
      }
  })

  }

}
