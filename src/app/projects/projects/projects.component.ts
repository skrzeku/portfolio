import { Component, OnInit } from '@angular/core';
import {Project} from '../models/Projects';
import {Filter} from '../models/Filter';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {



                              //my database of projects  !!
  projects: Project[] = [
    {
      img_url: 'myurl',
      language: 'jave',
      shortdescription: 'java game',
      description: 'it was one of my first project and my first adventure with java'
    },
    {
      img_url: 'myurl',
      language: 'JavaScript',
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
      shortdescription: 'Current WebSite',
      description: 'it was one of my first project and my first adventure with java'
    }
  ];
  filters: Filter[] = [
    {
      name: 'language',
      value: 'HTML'
    }
  ];

  constructor() { }

  ngOnInit() {}





}
