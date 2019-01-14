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
  @ViewChild('fat1') fat1: ElementRef;
  @ViewChild('naviChild') naviChild: MainNaviComponent;
  @ViewChild('skillright') skillright: ElementRef;
  @ViewChild('skillleft') skillleft: ElementRef;
  leftpos: any;
  rightpos: any;
  cont_hide: boolean = true;
  leftandrightTop: number;
  myposition: number;
  aboutposition: number;
  whatposition: number;
  skillsposition: number;
  i: number = 0;
  fourstars: string = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' +
    '<i class="fas fa-star"></i><i class="far fa-star"></i>';
  threestars: string = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' +
    '<i class="far fa-star"></i><i class="far fa-star"></i>';
  twostars: string = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>' +
    '<i class="far fa-star"></i><i class="far fa-star"></i>';

  constructor(private renderer: Renderer2) { }

    ngOnInit() {
      this.GetHYMLElements();
    }

  ngAfterViewInit() {
    const Siema = this.fat1.nativeElement;
    this.leftpos = this.skillleft.nativeElement;
    this.rightpos = this.skillright.nativeElement;
    this.myposition = Siema.getBoundingClientRect().top;
    this.leftandrightTop = this.leftpos.getBoundingClientRect().top;
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

  AddClassActive (numb: number): void {
    const siema = document.querySelectorAll('.nav-item').item(numb);
    siema.classList.add('active');
  }
  RemoveClassActive (): void {
    for (let s = 0; s < 3; s++) {
      const siema = document.querySelectorAll('.nav-item').item(s);
      siema.classList.remove('active');
    }

  }

  GetHYMLElements (): void {
    const about = document.querySelector('.myrelative');
    console.log(about);
    this.aboutposition = about.getBoundingClientRect().top;
    const whatido = document.querySelector('#mdo');
    this.whatposition = whatido.getBoundingClientRect().top;
    const skills = document.querySelector('#one');
    this.skillsposition = skills.getBoundingClientRect().top;

    //i decided to move it to the contact module
    /*
    let askme = document.querySelector('#two');
    this.askmeposition = askme.getBoundingClientRect().top; */
  }


          //What to do when scroll
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.checkScrollNavi();
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

  //Call it when scroll!
  checkScrollNavi() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < (this.myposition - 50)) {
      this.RemoveClassActive();
    }
    if (scrollPosition >= (this.myposition - 50)) {
      this.RemoveClassActive();
      this.AddClassActive(0);
    }
    if (scrollPosition >= (this.whatposition - 350)) {
      this.RemoveClassActive();
      this.AddClassActive(1);
    }
    if (scrollPosition >= (this.skillsposition - 350)) {
      this.RemoveClassActive();
      this.AddClassActive(2);
    }
  }
}
