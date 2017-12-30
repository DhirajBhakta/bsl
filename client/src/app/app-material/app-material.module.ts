import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: []
})
export class AppMaterialModule { }
