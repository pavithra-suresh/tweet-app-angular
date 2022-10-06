import { TestBed } from '@angular/core/testing';

import { Tweet } from './tweet';

describe('Tweet.TsService', () => {
  let service: Tweet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tweet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
