import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MainService} from '../../shared-module/services/main.service';

@Component({
  selector: 'app-main-navi',
  templateUrl: './main-navi.component.html',
  styleUrls: ['./main-navi.component.scss']
})
export class MainNaviComponent implements OnInit {

  @ViewChild('mainnavbar') mainnavbar: ElementRef;
  fixednavbar: boolean = false;


  constructor(private render: Renderer2,
              private mainservice: MainService) {
  }

  ngOnInit() {
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
