import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {Project} from '../models/Projects';
import {Filter} from '../models/Filter';
import {FilterComponent} from '../filter/filter.component';
import {Router} from '@angular/router';
import {MainService} from '../../shared-module/services/main.service';
import {ProjectDetailsComponent} from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('filterchild') filterchild: FilterComponent;
  @ViewChild ('templateDetails' , {read: ViewContainerRef}) templateDetails: ViewContainerRef;



                              //my database of projects  !!
  projects: Project[] = [
    {
      id: 1,
      img_url: 'myurl',
      language: 'Java',
      shortdescription: 'java game',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      id: 2,
      img_url: 'myurl',
      language: 'HTML',
      shortdescription: 'Furniture app',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      id: 3,
      img_url: 'myurl',
      language: 'HTML',
      shortdescription: 'First WebSite',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      id: 4,
      img_url: 'myurl',
      language: 'Angular',
      shortdescription: 'Small Shop',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      id: 5,
      img_url: 'myurl',
      language: 'Angular',
      //language: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      shortdescription: 'Current WebSite',
      description: 'it was one of my first project and my first adventure with java'
    }
  ];

  filters: Filter[] = [];
  myRef: any;




  constructor(private router: Router,
              private mainservice: MainService,
              private componentfactoryresolve: ComponentFactoryResolver) { }

  ngOnInit() {

    this.filters = this.filterchild.ArrayofFilters;
    this.CheckCloseValue();
  }


  //Dynamic Component by Component Factory Resolver dont need Right Now!

  CreateDynamicDataComponent (project) {
    if (this.templateDetails.get(0) !== null) {
      this.destroyComponent();
    }
    const myfactory = this.componentfactoryresolve
      .resolveComponentFactory(<Type <ProjectDetailsComponent>> ProjectDetailsComponent);
    this.myRef = this.templateDetails.createComponent(myfactory);

        //componentRef allow to instance, so every field of class and add referneco to every method
    this.myRef.instance.project = project;
    this.mainservice.ShareProject(project);

    /*templateRef.instance.equalDate.subscribe((val) => {
      this.mydynamicoutput = val;
    }); */
  }
  destroyComponent() {
    this.myRef.destroy();
  }

  //Checkclose : value was emited by BehaviorSubject!
  CheckCloseValue (): void {
    this.mainservice.emitLikeOutput.subscribe(value2 => {
      if (value2) {
        this.myRef.destroy();
      }
      else return;
    });
  }

  consologClickedProjects (project: Project): void {
    this.mainservice.ShareProject(project);
const id = project.id;
console.log(id);
this.router.navigate(['/projects', project.id]);
  }





}
