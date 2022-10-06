import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title: string;

  constructor(public authService: AuthService) {
    this.title = 'Tweetsgram';
  }

  ngOnInit(): void {
  }

}
