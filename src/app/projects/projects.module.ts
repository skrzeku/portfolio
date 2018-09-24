import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { FilterComponent } from './filter/filter.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [ProjectsComponent, FilterComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
