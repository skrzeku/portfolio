import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MyfilterPipe} from '../../shared-module/pipes/myfilter.pipe';
import { ProjectsComponent } from './projects.component';
import {Project} from '../models/Projects';
import {FilterComponent} from '../filter/filter.component';
import {Filter} from '../models/Filter';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let proje = new Project();
  let projektafterfilter: Project[];
  let projectdata: Project[] = [{
    id: 9,
    img_url: 'myurl',
    language: 'HTML',
    shortdescription: 'java game',
    description: 'This is one of the first projects I decided to publish. A small window game TicTacToe ' +
    'I developed the mechanism of the game and victory or draw. ' +
    'The downside of this application was the lack of randomness at the start of the game.',
    tools: 'Java, WindowBuilder, IDE Eclipse',
    gitUrl: 'https://github.com/skrzeku/java-game'
  }];
  let pipe: MyfilterPipe;
          //To Show just HTML Projects
  let myFilterArray: Filter[] = [{
    name: 'language',
    value: 'HTML',
    value2: ''
  }];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModuleModule, RouterTestingModule],
      declarations: [ ProjectsComponent, FilterComponent],
      providers: [MyfilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
                //create new object
    pipe = new MyfilterPipe();
                //run filter pipe
    projektafterfilter = pipe.transform(projectdata, myFilterArray);
  });

  it('properties cannot be empty', () => {
    expect(projectdata.length).toEqual(1);
  });

  it('pipe should create', () => {
    console.log(projektafterfilter);
    expect(pipe).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pipe works and returns projects length of 1', () => {
    expect(projektafterfilter.length).toEqual(1);
  });
});
