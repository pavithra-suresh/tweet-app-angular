import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Tweet } from './tweet';

describe('Tweet.TsService', () => {
  let service: Tweet;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Tweet]
    });
    service = TestBed.inject(Tweet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
