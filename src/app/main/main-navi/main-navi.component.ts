import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {MainService} from '../../shared-module/services/main.service';
import {query} from '@angular/core/src/render3/query';

@Component({
  selector: 'app-main-navi',
  templateUrl: './main-navi.component.html',
  styleUrls: ['./main-navi.component.scss']
})
export class MainNaviComponent implements OnInit, AfterViewInit {

  @ViewChild('mainnavbar') mainnavbar: ElementRef;
  myelement: any;
  myposition: number;
  mypositionViewChild: number;
  fixednavbar: boolean = false;
  @ViewChild('fat1') fat1: ElementRef;

  constructor(private render: Renderer2,
              private mainservice: MainService) {
  }

  ngOnInit() {
    //this.myfunc();
  }
  ngAfterViewInit() {
  }

  myvoid(param, param2, param3): void {
    this.mainservice.ScrolltoElement(param, param2, param3);
  }


  /*
  myfunc(): void {
    this.myposition = document.querySelector('#fat').getBoundingClientRect().top;
    console.log(document.querySelector('#fat').getBoundingClientRect());
    console.log(this.myposition);
  }
  */






}
