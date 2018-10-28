import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  oneproject$ = new BehaviorSubject<any>(null);
  emitLikeOutput = new BehaviorSubject<any>(false);

  constructor() {
  }


  ScrolltoElement(element, offsetParam?, speedParam?): void {
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

  ShareProject(project): void {
    this.oneproject$.next(project);
  }
  ShareFromTemplate(value: boolean): void {
    this.emitLikeOutput.next(value);
  }

}



