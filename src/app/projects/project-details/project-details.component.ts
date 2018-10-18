import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Project} from '../models/Projects';
import {ActivatedRoute} from '@angular/router';
import {MainService} from '../../shared-module/services/main.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  @Output() OutputClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private activerouter: ActivatedRoute,
              private mainservice: MainService) { }

  ngOnInit() {
    this.Loadoneproject();
  }
  Loadoneproject (): void {
    this.mainservice.oneproject$.subscribe(value => {
      this.project = value;
    });
    //this.project = this.activerouter.snapshot.data['project'];
  }
  EmitClose (value: boolean) {
    this.OutputClose.emit(true);
  }
  EmitCloseByService (value: boolean) {
    this.mainservice.ShareFromTemplate(value);
  }

}
