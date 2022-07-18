import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './component/select/select.component';

const routes: Routes = [
  {path:'',component:SelectComponent},
  {path:'home',component:SelectComponent},
  {path:'lazy',loadChildren:() => import('./lazyRouting/my-module/my-module.module').then(mod => mod.MyModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
