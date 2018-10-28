import {AfterViewInit, Component, ContentChild, ElementRef, HostListener, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {setInterval} from 'timers';
import {MainNaviComponent} from '../main-navi/main-navi.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  subject: string;
  Body: string;
  images_imp: string = '../../../assets/images/';
  @ViewChild('fat1') fat1: ElementRef;
  @ViewChild('naviChild') naviChild: MainNaviComponent;
  myposition: number;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const Siema = this.fat1.nativeElement;
    this.myposition = Siema.getBoundingClientRect().top;
    console.log(this.myposition);
  }

  SendMail(subject: string, body: string): void {
    window.location.href = 'mailto:mail@example.org?subject=' + subject + '&body=' + body;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition <= (this.myposition - 50)) {
      this.naviChild.fixednavbar = false;
    } else {
      this.naviChild.fixednavbar = true;

    }
  }




}
