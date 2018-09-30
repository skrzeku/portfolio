import {Component, HostListener, Inject, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {setInterval} from 'timers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  scrollValue = 0;
  clickedValue: string;
  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event) {
    this.scrollValue = this.scrollValue + 1;
  }




}
