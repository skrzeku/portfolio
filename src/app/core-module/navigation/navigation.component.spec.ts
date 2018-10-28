import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import {Router, RouterLinkActive, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatTooltipModule} from '@angular/material';
import {MainComponent} from '../../main/main/main.component';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,
        RouterTestingModule,],
      declarations: [ NavigationComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
