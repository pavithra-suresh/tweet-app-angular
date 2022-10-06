import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { User } from './user';

describe('UserService', () => {
  let service: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [User]
    });
    service = TestBed.inject(User);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
