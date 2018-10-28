///<reference path="../../../../node_modules/protractor/built/index.d.ts"/>
import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { ProjectDetailsComponent } from './project-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Project} from '../models/Projects';
import {MainService} from '../../shared-module/services/main.service';
import {inject, Injector} from '@angular/core';


describe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  let project: Project;
  let service: MainService;
  let injector: Injector;
  let UndefinedProject: Project;
  let projectJustWithId: Project = {id: 10, shortdescription: '', gitUrl: '', tools: '', language: '', description: '', img_url: '' };
  let projects: Project =  {
    id: 9,
    img_url: 'myurl',
    language: 'Java',
    shortdescription: 'java game',
    description: 'This is one of the first projects I decided to publish. A small window game TicTacToe ' +
    'I developed the mechanism of the game and victory or draw. ' +
    'The downside of this application was the lack of randomness at the start of the game.',
    tools: 'Java, WindowBuilder, IDE Eclipse',
    gitUrl: 'https://github.com/skrzeku/java-game'
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProjectDetailsComponent],
      providers: [MainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(MainService);
    service.ShareProject(projects);
    service.oneproject$.subscribe((val) => {
      project = val;
      console.log(val);
    });


    fixture.detectChanges();

  });

  it('function was called', () => {
    expect(project.shortdescription).toBe(projects.shortdescription);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('objects property cant be empty', () => {
    service.ShareProject(projectJustWithId);
    expect(project.language).not.toBeNull();
  });
  it('should have length of values of 7', () =>  {
    expect(project).toEqual(projects);
  });
  it('should return undefined when service share wrong project',  () => {
    service.ShareProject(UndefinedProject);
    expect(project).not.toBeDefined();
  });
});
describe('another test', () => {
  let fixture: ComponentFixture<ProjectDetailsComponent>;
  let component: ProjectDetailsComponent;
  let services = TestBed.get(MainService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProjectDetailsComponent],
      providers: [MainService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(services , 'ShareProject');
    fixture = TestBed.createComponent(ProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be called',  () => {
    expect(services .ShareProject).toHaveBeenCalled();
  });
});



