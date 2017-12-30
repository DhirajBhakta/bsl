import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { InventoryLayoutComponent } from './layout/inventory-layout/inventory-layout.component';
import { SalesLayoutComponent } from './layout/sales-layout/sales-layout.component';
import { ReportsLayoutComponent } from './layout/reports-layout/reports-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    InventoryLayoutComponent,
    SalesLayoutComponent,
    ReportsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
