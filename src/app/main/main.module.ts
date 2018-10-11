import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModuleModule} from '../core-module/core-module.module';
import { MainComponent } from './main/main.component';
import { MainNaviComponent } from './main-navi/main-navi.component';
import { MainHomeComponent } from './main-home/main-home.component';
import {MatTooltipModule} from '@angular/material';
import {MainService} from '../shared-module/services/main.service';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModuleModule,
    MatTooltipModule,
    SharedModuleModule,
    RouterModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent, MainNaviComponent, MainHomeComponent]
})
export class MainModule { }
