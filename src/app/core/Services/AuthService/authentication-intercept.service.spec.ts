import { TestBed } from '@angular/core/testing';

import { AuthenticationInterceptService } from './authentication-intercept.service';

describe('AuthenticationInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationInterceptService = TestBed.get(AuthenticationInterceptService);
    expect(service).toBeTruthy();
  });
});
