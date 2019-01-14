import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';

import { MainComponent } from './main.component';
import {MainHomeComponent} from '../main-home/main-home.component';
import {MainNaviComponent} from '../main-navi/main-navi.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let myquery: any;
  let query: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ MainComponent, MainHomeComponent, MainNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    myquery = document.querySelectorAll('.nav-item').item(0);
    query = document.querySelector('.myrelative').getBoundingClientRect().top;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('element of children component should be defined ', () => {
    expect(myquery).toBeDefined();
  });
  it('getBoundingClientRect of children component works ',  () => {
    expect(query).not.toEqual(0);
  });
});
