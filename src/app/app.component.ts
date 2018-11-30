import {Component, OnInit} from '@angular/core';
import { Router, Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  Loading: boolean = false;
  title = 'Portfolio';
  constructor (private router: Router) {

  }


        //SPINNER
  ngOnInit () {
    this.router.events.subscribe((routerEvent: Event) => {
      //to check Routing Events
      //console.log('routerEvent', routerEvent);
      this.checkRouterEvent(routerEvent);
    });
  }

  private checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.Loading = true;
    } else if (routerEvent instanceof NavigationEnd
      || routerEvent instanceof NavigationCancel
      || routerEvent instanceof NavigationError) {
      this.Loading = false;
    }
  }

}

