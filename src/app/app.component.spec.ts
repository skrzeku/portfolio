import { TestBed, async } from '@angular/core/testing';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';
import { AppComponent } from './app.component';
import {CoreModuleModule} from './core-module/core-module.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactModule} from './contact/contact.module';
import {SharedModuleModule} from './shared-module/shared-module.module';
import {APP_BASE_HREF} from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModuleModule,
        MainModule,
        AppRoutingModule,
        ContactModule,
        BrowserAnimationsModule,
        SharedModuleModule,
        RouterModule],
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*
  it(`should have as title 'Portfolio'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Portfolio');
  }));
  /*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Portfolio!');
  })); */
});
describe('first test', function() {
  it('should add 2 and 2', function() {
    expect(2 + 2).toBe(4);
  });
});
