import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';



console.warn("lazy module loaded")
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ]
})
export class MyModuleModule { }
