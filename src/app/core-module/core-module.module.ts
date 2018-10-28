import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from './navigation/navigation.component';
import {Router, RouterModule} from '@angular/router';
import {MatTooltip, MatTooltipModule} from '@angular/material';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
})
export class CoreModuleModule { }
