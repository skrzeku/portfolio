import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Body: string;
  subject: string;
  email: any;
  emailform: FormGroup;
  error_bool: boolean = false;

  error_text: string = '';
  has_sended: boolean = false;


  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.BuildemailForm();
  }



  CheckEmail(): void {
    const l = 'Failed to send: ';
    const wrong_email = l + "Invalid e-mail, let's try again (example@gmail.com)";
    const wrong_subject = l + 'Subject is required or is too long (max 20 words)';
    const wrong_text = l + 'Did you forget to fill the text field?';

    if (this.emailform.controls['subject'].invalid) {
     this.error_text = wrong_subject;
    }
    if (this.emailform.controls['email'].invalid) {
      this.error_text = wrong_email;
    }
    if (this.emailform.controls['Body'].invalid) {
      this.error_text = wrong_text;
    }
    else return;
  }

  BuildemailForm(): void {
    this.emailform = this.formbuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      Body: ['', [Validators.required, Validators.maxLength(550)]]
    });
  }
  SendMail(): void {
    const sended = 'email has been sent!';
    if (this.emailform.invalid) {
      this.error_bool = true;
      this.has_sended = false;
      this.CheckEmail();
    }
    else {
      this.SendMail2();
      this.has_sended = true;
      this.error_text = sended;
      this.error_bool = true;
      this.emailform.reset();
    }
  }



                //emailjs Rest API
  SendMail2(): void {
    const data = {
      service_id: 'skrzekugmail',
      template_id: 'mytemplate',
      user_id: 'user_7IplmzdpkPdh019K7I4Ey',
      template_params: {
        subject: this.emailform.controls['subject'].value,
        text: this.emailform.controls['email'].value,
        from_email: this.emailform.controls['Body'].value
      }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      console.log('Your mail is sent!');
    }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  }

}
