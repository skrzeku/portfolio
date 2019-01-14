import { TestBed, inject } from '@angular/core/testing';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService]
    });
  });

  it('should be created', inject([SeoService], (service: SeoService) => {
    expect(service).toBeTruthy();
  }));
});
