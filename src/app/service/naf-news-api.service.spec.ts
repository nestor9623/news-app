import { TestBed } from '@angular/core/testing';

import { NafNewsApiService } from './naf-news-api.service';

describe('NafNewsApiService', () => {
  let service: NafNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NafNewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
