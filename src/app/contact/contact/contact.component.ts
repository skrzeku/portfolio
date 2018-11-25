import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Body: string;
  subject: string;


  constructor() { }

  ngOnInit() {
  }

  SendMail(subject: string, body: string): void {

    window.location.href = 'mailto:mail@example.org?subject=' + subject + '&body=' + body;
  }


}
