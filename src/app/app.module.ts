import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
