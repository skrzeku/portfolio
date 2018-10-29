import {
  AfterViewInit, Component, ContentChild, ElementRef, HostListener, Inject, OnInit, Renderer2, TemplateRef,
  ViewChild
} from '@angular/core';
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
  @ViewChild('fat1') fat1: ElementRef;
  @ViewChild('naviChild') naviChild: MainNaviComponent;
  @ViewChild('skillright') skillright: ElementRef;
  @ViewChild('skillleft') skillleft: ElementRef;
  leftpos: any;
  rightpos: any;
  leftandrightTop: number;
  myposition: number;
  i: number = 0;
  fourstars: string = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>';
  threestars: string = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';
  twostars: string = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';

  constructor(private renderer: Renderer2) { }

    ngOnInit() {}

  ngAfterViewInit() {
    const Siema = this.fat1.nativeElement;
    this.leftpos = this.skillleft.nativeElement;
    this.rightpos = this.skillright.nativeElement;
    this.myposition = Siema.getBoundingClientRect().top;
    const bot = this.leftpos.getBoundingClientRect().bottom;
    const top = this.leftpos.getBoundingClientRect().top;
    this.leftandrightTop = this.leftpos.getBoundingClientRect().top;
  }

  SendMail(subject: string, body: string): void {
    window.location.href = 'mailto:mail@example.org?subject=' + subject + '&body=' + body;
  }
  LeftAnimate(element: any, dir: string, i: number): void {
    this.i++;
    if (this.i <= 2) {
      this.renderer.setStyle(element, dir, 0);
      this.renderer.setStyle(element, 'opacity', 1);
      this.renderer.setStyle(element, 'transition', 'all 2s');
      console.log('sss');
    }
    else return;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    let i: number = 0;
    if (scrollPosition <= (this.myposition - 50)) {
      this.naviChild.fixednavbar = false;
    }
    if (scrollPosition >= (this.myposition - 50)) {
      this.naviChild.fixednavbar = true;
    }
    if (scrollPosition >= (this.leftandrightTop - 500)) {
      i++;
      this.LeftAnimate(this.leftpos, 'left', i);
      this.LeftAnimate(this.rightpos, 'right', i);
    }
  }




}
