import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {MainService} from '../../shared-module/services/main.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit, AfterViewInit {
  @ViewChild ('arrow') arrow: ElementRef;

  constructor(private mainservice: MainService,
              private renderer: Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    //to change!!
    this.bounceArrow();

  }

  scrollTo(par1, par2, par3): void {
    this.mainservice.ScrolltoElement(par1, par2, par3);
    //$('html, body').animate({scrollTop: 700}, '50');
  }

  bounceArrow() {
    let arro = this.arrow.nativeElement;

  }
}


