import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }

