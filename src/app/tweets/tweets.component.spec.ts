import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TweetService } from './../tweet.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsComponent } from './tweets.component';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;
  //let activatedRoute: ActivatedRouteSnapshot;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsComponent ],
      imports: [HttpClientModule, RouterTestingModule], 
      providers: [ TweetService, { provide: ActivatedRoute, useValue: {
        snapshot:
          {
          url: [{ path: 1 }, { path: 2 }]
           },
      }, HttpClient}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  const getFixtureAndComponent = () => {
    const fixture = TestBed.createComponent(TweetsComponent);
    const component = fixture.debugElement.componentInstance;

    return { fixture, component };
  };

  it('should create', () => {
    const { fixture, component } = getFixtureAndComponent();
    expect(component).toBeTruthy();
  });
});
