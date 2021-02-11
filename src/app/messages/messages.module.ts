import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MatSidenavModule } from "@angular/material/sidenav";
//swiper
import { SwiperComponent } from "../swiper/swiper.component";
import { MatListModule } from "@angular/material/list";
import { SwiperModule } from "swiper/angular";

import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [MessagesListComponent,
    SwiperComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,

    //swiper
    SwiperModule,
    FormsModule
  ]
})
export class MessagesModule { }
