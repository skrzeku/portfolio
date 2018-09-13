import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModuleModule} from './core-module/core-module.module';
import {MainModule} from './main/main.module';
import {AppRoutingModule} from './app-routing.module';
import {ContactModule} from './contact/contact.module';
import {ProjectsModule} from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleModule,
    MainModule,
    AppRoutingModule,
    ContactModule,
    ProjectsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
