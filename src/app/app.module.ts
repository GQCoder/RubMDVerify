import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { VerifiBoxComponent } from './verifi-box/verifi-box.component';
import { VerifyComponent } from './verify/verify.component';
import { eConsultModel } from "./models/eConsult.model";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerifiBoxComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [eConsultModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
