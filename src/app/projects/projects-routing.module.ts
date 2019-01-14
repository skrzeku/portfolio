import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ProjectRouterComponent} from './project-router.component';

const Projects: Routes = [
  {path: '',
    component: <any>ProjectRouterComponent,
    children: [{
    path: '',
      component: <any>ProjectsComponent
    },
      {
        path: ':id',
        pathMatch: 'full',
        component: <any>ProjectDetailsComponent
      }],
  },
];

@NgModule ({
  exports: [RouterModule],
  imports: [RouterModule.forChild(Projects)]

})
export class ProjectsRoutingModule { }
