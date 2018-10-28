import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNaviComponent } from './main-navi.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainNaviComponent', () => {
  let component: MainNaviComponent;
  let fixture: ComponentFixture<MainNaviComponent>;
  let position: any;
  let div: any;
  let myposi: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ MainNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNaviComponent);
    component = fixture.componentInstance;
    div = document.createElement('div');
    document.body.appendChild(div);
    position = div.getBoundingClientRect().top;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getbounding works', () => {
    expect(position).not.toBe(null);
  });
});
