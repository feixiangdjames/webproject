import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
//Material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from "@angular/material/select";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import {HomeListComponent} from './home/home-list/home-list.component'
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Material
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatTreeModule,
    FormsModule,
    MatSelectModule,
    //translate
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:TranslateHttpLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
