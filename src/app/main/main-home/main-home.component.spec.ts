import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeComponent } from './main-home.component';
import {MainService} from '../../shared-module/services/main.service';

describe('MainHomeComponent', () => {
  let component: MainHomeComponent;
  let fixture: ComponentFixture<MainHomeComponent>;
  let service: MainService;
  let div: any;
  let position: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHomeComponent ],
      providers: [MainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeComponent);
    component = fixture.componentInstance;
    div = document.createElement('div');
    document.body.appendChild(div);
    service = new MainService();
    fixture.detectChanges();
    service.ScrolltoElement(div, 0, 100);
    position = window.pageYOffset;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('pageYoffset after ScrollToElement cannot to equal 0', () => {
    console.log('posi' + position);
    expect(position).not.toEqual(0);
  });

});
