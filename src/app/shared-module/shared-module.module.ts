import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MainService} from './services/main.service';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MainService],
  declarations: [HeaderComponent, MyfilterPipe, DetailsComponent, PageNotFoundComponent],
  exports: [HeaderComponent, MyfilterPipe, PageNotFoundComponent]
})
export class SharedModuleModule { }
