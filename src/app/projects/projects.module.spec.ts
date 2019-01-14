import { ProjectsModule } from './projects.module';
import {describe, expect, it, beforeEach} from '@angular/core/testing/src/testing_internal';


describe('ProjectsModule', () => {
  let projectsModule: ProjectsModule;

  beforeEach(() => {
    projectsModule = new ProjectsModule();
  });

  it('should create an instance', () => {
    expect(projectsModule).toBeTruthy();
  });
});
