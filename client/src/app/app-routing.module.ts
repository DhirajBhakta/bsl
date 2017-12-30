import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { InventoryLayoutComponent } from './layout/inventory-layout/inventory-layout.component';
import { SalesLayoutComponent } from './layout/sales-layout/sales-layout.component';
import { ReportsLayoutComponent } from './layout/reports-layout/reports-layout.component';


const routes:Routes=[
  {path:'home', component: HomeLayoutComponent},
  {path:'inventory', component: InventoryLayoutComponent},
  {path:'reports', component: ReportsLayoutComponent},
  {path:'sales', component: SalesLayoutComponent},

]

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})

export class AppRoutingModule { }
