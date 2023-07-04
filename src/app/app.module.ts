import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http'
import {NewsapiserviceService} from './service/newsapiservice.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechNewsComponent,
    BuisnessNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
