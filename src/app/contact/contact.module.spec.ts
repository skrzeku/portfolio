import { ContactModule } from './contact.module';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';

describe('ContactModule', () => {
  let contactModule: ContactModule;

  beforeEach(() => {
    contactModule = new ContactModule();
  });

  it('should create an instance', () => {
    expect(contactModule).toBeTruthy();
  });
});
