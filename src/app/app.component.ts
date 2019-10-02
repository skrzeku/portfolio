import {Component, OnInit} from '@angular/core';
import { Router, Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import {SeoService} from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Loading: boolean = false;
  lol: boolean = false;
  title = 'Portfolio';
  constructor (private router: Router,
               private seoservice: SeoService) {
seoservice.addSeoData();
  }


        /*CountTo jQuery Plugin by using html attributes   !!! useful

  $('.timer').countTo();

   */



        //SPINNER
  ngOnInit () {
    this.router.events.subscribe((routerEvent: Event) => {
      //to check Routing Events
      //console.log('routerEvent', routerEvent);
      this.checkRouterEvent(routerEvent);
    });
  }

   checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.Loading = true;
    } else if (routerEvent instanceof NavigationEnd
      || routerEvent instanceof NavigationCancel
      || routerEvent instanceof NavigationError) {
      this.Loading = false;
    }
  }

}

