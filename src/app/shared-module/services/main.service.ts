import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import {BehaviorSubject, Observable} from 'rxjs';
import {Project} from '../../projects/models/Projects';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  oneproject$ = new BehaviorSubject<any>(null);
  private MyApiUrl = 'http://localhost:4200/projects';
  emitLikeOutput = new BehaviorSubject<any>(false);

  constructor() {
  }

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

  ShareProject(project): void {
    this.oneproject$.next(project);
    console.log(project);
  }
  ShareFromTemplate(value: boolean): void {
    this.emitLikeOutput.next(value);
    console.log(value);
  }

}



