import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Body: string;
  subject: string;
  email: any;




  constructor() { }

  ngOnInit() {
  }
  SendMail(subject: string, email: string, text: string):void {

    const templateParams = {
      subject: subject,
      text: text,
      from_email: email
    };

    emailjs.send('skrzekugmail', 'mytemplate', templateParams, 'user_7IplmzdpkPdh019K7I4Ey')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
     console.log('sended?');
  }



}
