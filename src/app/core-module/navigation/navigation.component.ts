import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
//import * as $ from 'jquery';
declare var $: any;
import {NavigationEnd, NavigationStart, Router} from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showdrop: boolean = true;

  @ViewChild('navcollapse') navcollapse: ElementRef;

  constructor(private router: Router) {
  }


  ngOnInit() {

  }

  @HostListener ('window: resize') checkResize() {
    if (window.innerWidth > 992) {
      this.showdrop = true;
    }
    else return;

  }

  myvoid(): boolean {
    if (window.innerWidth < 992) {
      return true;
    }
    else return false;
  }
  click(): void {
    if (this.myvoid()) {
      this.showdrop = false;
    }
    else this.showdrop = true;
  }
  dosmthg(): void {
    $('.collapse').collapse('hide');

  }




}
