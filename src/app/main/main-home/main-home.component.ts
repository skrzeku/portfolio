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

    //to change!! no needed
    //this.bounceArrow();

  }

  scrollTo(par1, par2, par3): void {
    this.mainservice.ScrolltoElement(par1, par2, par3);
    //$('html, body').animate({scrollTop: 700}, '50');
  }

  bounceArrow() {
    //let arro = this.arrow.nativeElement;

  }
@HostListener('window:scroll', ['$event'])
  Checkscroll() {
  const Scrollpos = window.pageYOffset;
  const hei = window.innerHeight - 200;
  const lol = 600;
  const opamy = (((hei - Scrollpos) / hei));
  this.renderer.setStyle(this.myhello, 'opacity', opamy);
}



    //var scrollTop = $(this).scrollTop();

/*
    $('.header-overlay').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;

        return opacity;
      }
    });
  });*/


}


