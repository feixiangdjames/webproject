import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OrdersListComponent} from './orders-list/orders-list.component'

const routes: Routes = [
  {
    path:'',
    component:OrdersListComponent
  },
  {path:'detail',loadChildren:()=>import('../detail/detail.module').then(m=>m.DetailModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
