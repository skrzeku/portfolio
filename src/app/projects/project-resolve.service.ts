import { Injectable } from '@angular/core';
import {MainService} from '../shared-module/services/main.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolveService  {

  constructor(private mainservice: MainService) { }

  /*resolve(route: ActivatedRouteSnapshot) {

    // operator params give u a abilities to get a parameters from Website Api for example:
    // http:// realmadrid.com/shop/15 here param mean 15 it can be called 'id' or something like that
    return this.mainservice.getoneproduct(route.params['id']);
  };
*/

}


