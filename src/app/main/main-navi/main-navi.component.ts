import {Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-navi',
  templateUrl: './main-navi.component.html',
  styleUrls: ['./main-navi.component.scss']
})
export class MainNaviComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shownavbar: boolean = false;

  scrollTOElement = (element, offsetParam?, speedParam?) => {
    const toElement = $(element);
    const focusElement = $(element);
    const offset = offsetParam * 1 || 20;
    const speed = speedParam * 1 || 50;
    $('html, body').animate({
      scrollTop: toElement.offset().top + offset
    }, speed);
    if (focusElement) {
      $(focusElement).focus();
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    //const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset;

    if (scrollPosition <= 799) {
      this.shownavbar = false;
      console.log('should be hidden');
    } else {
      this.shownavbar = true;
      console.log('should be shown');
    }
  }


}
