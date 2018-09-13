import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main/main.component';
import {ProjectsComponent} from './projects/projects/projects.component';
import {ContactComponent} from './contact/contact/contact.component';



const APP_ROUTES : Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: <any> MainComponent, pathMatch: 'full'},
  {path: 'projects', component: <any> ProjectsComponent},
  {path: 'contact', component: <any> ContactComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {
  })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
