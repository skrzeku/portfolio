import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main/main.component';
import {ContactComponent} from './contact/contact/contact.component';
import {SharedModuleModule} from './shared-module/shared-module.module';



const APP_ROUTES : Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: <any> MainComponent, pathMatch: 'full'},
  {path: 'contact', component: <any> ContactComponent, pathMatch: 'full'},
  {path: 'projects', loadChildren: '../app/projects/projects.module#ProjectsModule'},
//loadChildren: 'app/shop/shop.module#ShopModule'

];
@NgModule({
                    //scrollPositionRestoration is using for Angular 6.1+ means: Scroll to top after rooting!
  imports: [RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule, SharedModuleModule]

})
export class AppRoutingModule { }
