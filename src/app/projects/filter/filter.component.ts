import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  ArrayofFilters = [];
  all: boolean = false;
  myname: string = 'language';
  myvalue: any = '';
  myvalue2: any = '';

  constructor() { }

  ngOnInit() {

  }
  PushIt () {
    this.ArrayofFilters.pop();
    this.ArrayofFilters.push({
      name: this.myname,
      value: this.myvalue,
      value2: this.myvalue2
    });
    console.log(this.ArrayofFilters);
}

  FilltheArray (param: string) {

    if (param === 'all') {
      this.ArrayofFilters.length = 0;
    }
    else {
      this.PushIt();
      if (param === 'HTML') {
        this.ArrayofFilters[0].value = 'HTML';
        this.ArrayofFilters[0].value2 = 'Angular';
      }
      else {
        this.ArrayofFilters[0].value = param;
        this.ArrayofFilters[0].value2 = '';
      }
    }
    console.log(this.ArrayofFilters);
  }

}
