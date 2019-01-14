import { ProjectsRoutingModule } from './projects-routing.module';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';

describe('ProjectsRoutingModule', () => {
  let projectsRoutingModule: ProjectsRoutingModule;

  beforeEach(() => {
    projectsRoutingModule = new ProjectsRoutingModule();
  });

  it('should create an instance', () => {
    expect(projectsRoutingModule).toBeTruthy();
  });
});
