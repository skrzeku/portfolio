import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrolllby() : void {
    window.scrollBy(0, 230);
    console.log(window.pageYOffset);

  }
  scrollTo(): void {
    $('html, body').animate({scrollTop: 800}, '50');

  }
}
