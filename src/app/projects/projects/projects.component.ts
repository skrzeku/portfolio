import {Component, OnInit, ViewChild} from '@angular/core';
import {Project} from '../models/Projects';
import {Filter} from '../models/Filter';
import {FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('filterchild') filterchild: FilterComponent;



                              //my database of projects  !!
  projects: Project[] = [
    {
      img_url: 'myurl',
      language: 'Java',
      shortdescription: 'java game',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      img_url: 'myurl',
      language: 'HTML',
      shortdescription: 'Furniture app',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      img_url: 'myurl',
      language: 'HTML',
      shortdescription: 'First WebSite',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      img_url: 'myurl',
      language: 'Angular',
      shortdescription: 'Small Shop',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      img_url: 'myurl',
      language: 'Angular',
      //language: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      shortdescription: 'Current WebSite',
      description: 'it was one of my first project and my first adventure with java'
    }
  ];

  filters: Filter[] = [];

  constructor() { }

  ngOnInit() {

    this.filters = this.filterchild.ArrayofFilters;
  }





}
