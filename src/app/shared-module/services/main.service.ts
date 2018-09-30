import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

myconditional: boolean = false;

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
}



