import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MainService} from './services/main.service';
import { MyfilterPipe } from './pipes/myfilter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MainService],
  declarations: [HeaderComponent, MyfilterPipe],
  exports: [HeaderComponent, MyfilterPipe]
})
export class SharedModuleModule { }
