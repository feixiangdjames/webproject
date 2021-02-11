import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent} from './orders/orders-list/orders-list.component'

import {MessagesListComponent} from './messages/messages-list/messages-list.component'
const routes: Routes = [
  {path:'',loadChildren:()=>import('./messages/messages.module').then(m=>m.MessagesModule)},
  {path:'orders',loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)},
  {path:'detail',loadChildren:()=>import('./detail/detail.module').then(m=>m.DetailModule)},
 /* {path:'orders',component:OrdersListComponent}*/
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
