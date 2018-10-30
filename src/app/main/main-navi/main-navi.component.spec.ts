import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNaviComponent } from './main-navi.component';
import {RouterTestingModule} from '@angular/router/testing';
import Spy = jasmine.Spy;

describe('MainNaviComponent', () => {
  let component: MainNaviComponent;
  let fixture: ComponentFixture<MainNaviComponent>;
  let position: any;
  let compiled: any;
  let div: any;
  let myposi: any;
  let nextposi: any;
  let myspy: Spy;



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
            //create div element!!
    div = document.createElement('div');
    document.body.appendChild(div);
    div.setAttribute('id', 'siema');


    myposi = document.querySelectorAll('.myrelative').item(0);
    nextposi = document.querySelector('#mdo');
    console.log('next', nextposi);


    //position = div.getBoundingClientRect().top;
    //myposi = document.getElementById('siema').getBoundingClientRect().top;
    //console.log('myposi', myposi);
    /*myspy = spyOn(document, 'querySelectorAll').and.callFake(function() {
      return {
        value: '#siema'
      };
    }); */
    //console.log(myspy);

    //nextposi = document.querySelectorAll('#mdo').item(0).getBoundingClientRect().top;
    //console.log('nextposi', nextposi);
    console.log('myposi', myposi);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getbounding works', () => {
    expect(position).not.toBe(null);
  });
  it('querySelector works ', function () {
    expect(nextposi).toBeDefined();
  });
});
