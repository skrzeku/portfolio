import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {MainService} from '../../shared-module/services/main.service';

@Component({
  selector: 'app-main-navi',
  templateUrl: './main-navi.component.html',
  styleUrls: ['./main-navi.component.scss']
})
export class MainNaviComponent implements OnInit {

  @ViewChild ('mainnavbar') mainnavbar: ElementRef;
  myelement: any;
  myposition: number;
  fixednavbar: boolean = false;

  constructor(private render: Renderer2,
              private mainservice: MainService) { }

  ngOnInit() {
    this.myfunc();
  }

  myvoid(param, param2, param3): void {
    this.mainservice.ScrolltoElement(param, param2, param3);
  }




  myfunc (): void {
    this.myposition = document.querySelector('#fat').getBoundingClientRect().top;
    console.log(this.myposition);
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition <= (this.myposition - 50)) {
      this.fixednavbar = false;
    } else {
      this.fixednavbar = true;

    }
  }


}
