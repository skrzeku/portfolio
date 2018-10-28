import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRouterComponent } from './project-router.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProjectRouterComponent', () => {
  let component: ProjectRouterComponent;
  let fixture: ComponentFixture<ProjectRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProjectRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
