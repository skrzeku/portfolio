import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {MainService} from '../../shared-module/services/main.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit, AfterViewInit {
  @ViewChild ('arrow') arrow: ElementRef;
  @ViewChild ('hello') hello: ElementRef;
  myhello: any;

  constructor(private mainservice: MainService,
              private renderer: Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.myhello = this.hello.nativeElement;
    console.log(this.myhello.clientHeight);

  }

  scrollTo(par1, par2, par3): void {
    this.mainservice.ScrolltoElement(par1, par2, par3);
  }

@HostListener('window:scroll', ['$event'])
  Checkscroll() {
  const Scrollpos = window.pageYOffset;
  const hei = window.innerHeight * 0.6;
  const opamy = (((hei - Scrollpos) / hei));
  this.renderer.setStyle(this.myhello, 'opacity', opamy);
}



}


