import {Component, ComponentFactoryResolver, ContentChild, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {Project} from '../models/Projects';
import {Filter} from '../models/Filter';
import {FilterComponent} from '../filter/filter.component';
import {Router} from '@angular/router';
import {MainService} from '../../shared-module/services/main.service';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import * as $ from 'jquery';
import {element} from 'protractor';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('filterchild') filterchild: FilterComponent;
  @ViewChild ('templateDetails' , {read: ViewContainerRef}) templateDetails: ViewContainerRef;
  @ContentChild(TemplateRef) NoProjects: TemplateRef<any>;



                              //my database of projects  !!
  projects: Project[] = [
    {
      id: 1,
      img_url: '../../../assets/images/furni.png',
      language: 'HTML',
      shortdescription: 'Furniture app',
      description: 'Aplikacja meblowa jak ją nazwałem, była moją pierwszą aplikacją wykonaną przy wykorzystaniu języka JavaScript oraz biblioteki JQuery.' +
      'Aplikacja ta służyłą prostej wizualizacji elementów meblowych i skomponowanie mini kuchni.',
      tools: 'HTML5, CSS3, JavaScript, JQuery, Bootstrap',
      gitUrl: 'https://github.com/skrzeku/furniture_app'
    },
    {
      id: 2,
      img_url: '../../../assets/images/site.png',
      language: 'HTML',
      shortdescription: 'First WebSite',
      description: 'Moja pierwsza strona internetowa, która była kolejnym etapem poznawania technologii front-endowych.',
      tools: 'HTML5, CSS3, JavaScript, JQuery, Bootstrap',
      gitUrl: 'https://github.com/skrzeku/Site'
    },
    {
      id: 3,
      img_url: '../../../assets/images/smallsho.png',
      language: 'Angular',
      shortdescription: 'Small Shop',
      description: 'Moja pierwsza aplikacja typu SPA. W 100% wymyślona i zrobiona przeze mnie. Wzorowałem się tutaj na aplikacji olx.pl. Aplikacja ta pozwala dodawać, edytować produkty dla zarejestrowanych użytkowników. W pełni również został zrobiony ' +
      'system logowania. Wszystko to dzięki aplikacji Rest API do której tworzenia wykorzystałem framework Loopback',
      tools: 'TypeScript, Angular v4, Rest API, Loopback, HTML5, LESS, Bootstrap',
      gitUrl: 'https://github.com/skrzeku/SmallShop'
    },
    {
      id: 4,
      img_url: '../../../assets/images/portfolio.png',
      language: 'Angular',
      shortdescription: 'Current WebSite',
      description: 'Moja obecna strona internetowa. Jest to aplkiacja typu SPA. Była to moja druga aplikacja w której wykorzystałem nowoczesny framework Javascript - Angular.',
      tools: 'TypeScript, Angular v6, HTML5, SCSS, Bootstrap, Node.js',
      gitUrl: 'https://github.com/skrzeku/portfolio'
    },
    {
      id: 5,
      img_url: '../../../assets/images/portfolio.png',
      language: 'Angular',
      shortdescription: 'Auto-center',
      description: 'Mój trzeci projekt aplikacji typu SPA (Single Page Application) wykonana przy użyciu Angular 6 oraz technologii backend Google Firebase. ' +
      'Stylując tą aplikację wzorowałem się na aplikacji otomoto.pl. Nad tą aplikacją stale pracuje. W finalnej wersji znajdować się bedzie pełny system logowania, ' +
      'zaawansowany routing z nałożonymi Guardami. Możliwość dodawania, edytowania, usuwania pojazdów, oraz automatyczne usuwanie pojazdów po upływie określonego czasu.',
      tools: 'TypeScript, Angular v6, HTML5, Less, Node.js, Google Firebase',
      gitUrl: 'https://github.com/skrzeku/Auto-Center'
    },
    {
      id: 7,
      img_url: '../../../assets/images/domekon2.png',
      language: 'Java',
      shortdescription: 'domekon.pl',
      description: 'Ten projekt nie jest mojego autorstwa, ja jedynie pomagałem w wykończeniu pod względem względem stylistycznym oraz SEO.' +
      'Dla mnie było to cenne doświadczenie w pracy z nową technologią jaką jest Wordpress.',
      tools: 'Wordpress, CSS, HTML5, PHP',
      gitUrl: 'http://domekon.pl'
    }
  ];

  filters: Filter[] = [];
  myRef: any;
  public backgroundImg: SafeStyle;




  constructor(private router: Router,
              private mainservice: MainService,
              private componentfactoryresolve: ComponentFactoryResolver,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.filters = this.filterchild.ArrayofFilters;
    this.CheckCloseValue();

    //this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url("../../../assets/images/site2.png")');
  }


  //Dynamic Component by Component Factory Resolver dont need Right Now!

  CreateDynamicDataComponent (project) {
    if (this.templateDetails.get(0) !== null) {
      this.destroyComponent();
    }
    const myfactory = this.componentfactoryresolve
      .resolveComponentFactory(<Type <ProjectDetailsComponent>> ProjectDetailsComponent);
    this.myRef = this.templateDetails.createComponent(myfactory);

            //scroll by to hide menu and hover effects and .fasearch
    window.scrollBy(0,70);


        //componentRef allow to instance, so every field of class and add reference to every method
    this.myRef.instance.project = project;
    this.mainservice.ShareProject(project);

  }

  destroyComponent() {
    this.myRef.destroy();
    this.mainservice.ShareFromTemplate(false);
  }

  //Checkclose : value was emited by BehaviorSubject!
  CheckCloseValue (): void {
    this.mainservice.emitLikeOutput.subscribe(value2 => {
      if (value2) {
        this.destroyComponent();
      }
      else console.log(value2);
    });
  }

  consologClickedProjects (project: Project): void {
    this.mainservice.ShareProject(project);
const id = project.id;
console.log(id);
this.router.navigate(['/projects', project.id]);
  }





}
