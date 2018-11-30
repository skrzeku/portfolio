import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit {

  ArrayofFilters = [];
  all: boolean = false;
  myname: string = 'language';
  myvalue: any = '';
  myvalue2: any = '';
  ali: any;
  @ViewChild('alls') alls: ElementRef;
  @ViewChild('html') html: ElementRef;
  @ViewChild('java') java: ElementRef;
  @ViewChild('ng') ng: ElementRef;


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit () {
    this.ali = this.alls.nativeElement;
    console.log(this.ali);
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

addMyClass(element) {
    this.renderer.addClass(element, 'active');
}
RemoveClassActive (): void {
    for (let s = 0; s < 4; s++) {
      let siema = document.querySelectorAll('.ml-2').item(s);
      siema.classList.remove('active');
    }

  }

  FilltheArray (param: string, el: any) {

    if (param === 'all') {
      this.ArrayofFilters.length = 0;
      this.RemoveClassActive();
      this.addMyClass(el);
    }
    else {
      this.PushIt();
      if (param === 'HTML') {
        this.ArrayofFilters[0].value = 'HTML';
        this.ArrayofFilters[0].value2 = 'Angular';
        this.RemoveClassActive();
        this.addMyClass(this.html.nativeElement);
      }
      else {
        this.ArrayofFilters[0].value = param;
        this.ArrayofFilters[0].value2 = '';
        this.RemoveClassActive();
        this.addMyClass(el);
      }
    }
    console.log(this.ArrayofFilters);
  }

}
