import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { NafNewsApiService } from './service/naf-news-api.service';
import { FormsModule } from '@angular/forms';
import { NewCustomedComponent } from './new-customed/new-customed.component';
import { NewsFilterComponent } from './news-filter/news-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    NewCustomedComponent,
    NewsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NafNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
