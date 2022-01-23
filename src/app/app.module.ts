import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { SharedModule } from './Shared/shared.module';
import { PaisModule } from './Pais/pais.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PaisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
