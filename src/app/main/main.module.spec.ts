import { MainModule } from './main.module';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';

describe('MainModule', () => {
  let mainModule: MainModule;

  beforeEach(() => {
    mainModule = new MainModule();
  });

  it('should create an instance', () => {
    expect(mainModule).toBeTruthy();
  });
});
