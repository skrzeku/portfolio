import { MyfilterPipe } from './myfilter.pipe';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';

describe('MyfilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MyfilterPipe();
    expect(pipe).toBeTruthy();
  });
});
