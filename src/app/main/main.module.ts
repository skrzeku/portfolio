import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModuleModule} from '../core-module/core-module.module';
import { MainComponent } from './main/main.component';
import { MainNaviComponent } from './main-navi/main-navi.component';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModuleModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent, MainNaviComponent, MainHomeComponent]
})
export class MainModule { }
