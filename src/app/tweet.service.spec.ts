import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TweetService } from './tweet.service';

describe('TweetService', () => {
  let service: TweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(TweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
