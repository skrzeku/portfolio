import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { FilterComponent } from './filter/filter.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import {MyfilterPipe} from '../shared-module/pipes/myfilter.pipe';
import {FormsModule} from '@angular/forms';
import {ProjectsRoutingModule} from './projects-routing.module';
import {RouterModule} from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectRouterComponent } from './project-router.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule,
    SharedModuleModule,
    FormsModule,
  ],
  declarations: [ProjectsComponent, FilterComponent, ProjectDetailsComponent, ProjectRouterComponent],
  exports: [ProjectsComponent],
  providers: [MyfilterPipe]
})
export class ProjectsModule { }
