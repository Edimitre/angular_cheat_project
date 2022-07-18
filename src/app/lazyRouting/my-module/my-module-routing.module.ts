import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentComponent } from '../component/lazy-component/lazy-component.component';
import { SelectComponent } from '../../component/select/select.component';
const routes: Routes = [
  {path:'lazyComponent',component:LazyComponentComponent},
  {path:'home',component:SelectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
