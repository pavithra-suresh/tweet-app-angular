import { RouterTestingModule } from '@angular/router/testing';
import { TweetService } from './../tweet.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let activatedRoute: ActivatedRouteSnapshot;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [HttpClientModule, RouterTestingModule], 
      providers: [ TweetService, { provide: ActivatedRoute, useValue: activatedRoute, HttpClient }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
