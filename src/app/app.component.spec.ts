import { TestBed, async } from '@angular/core/testing';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';
import { AppComponent } from './app.component';
import {CoreModuleModule} from './core-module/core-module.module';
import {NavigationStart, Router, RouterEvent, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactModule} from './contact/contact.module';
import {SharedModuleModule} from './shared-module/shared-module.module';
import {APP_BASE_HREF} from '@angular/common';
describe('AppComponent', () => {
  let router: Router;
  let component: AppComponent;
  let navievent: RouterEvent;

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
  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

describe('GetInstance', () => {
  navievent = new NavigationStart(1, 'main');
  it('spinner should be visible', () => {
    component.checkRouterEvent(navievent);
    expect(component.Loading).toBe(true);
  });
});
});
