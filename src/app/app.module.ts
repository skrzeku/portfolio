import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModuleModule} from './core-module/core-module.module';
import {MainModule} from './main/main.module';
import {AppRoutingModule} from './app-routing.module';
import {ContactModule} from './contact/contact.module';
import {ProjectsModule} from './projects/projects.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModuleModule} from './shared-module/shared-module.module';
import {MyfilterPipe} from './shared-module/pipes/myfilter.pipe';
import {ProjectsRoutingModule} from './projects/projects-routing.module';
import {RouterModule, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModuleModule,
    MainModule,
    AppRoutingModule,
    ContactModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    RouterModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),

    //lazy loading don't need to import anything! like Projects module or projects-routing module
  ],
  providers: [MyfilterPipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule {

}
