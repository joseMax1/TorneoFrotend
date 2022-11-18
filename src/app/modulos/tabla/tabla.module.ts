import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { CrearTablaComponent } from './crear-tabla/crear-tabla.component';


@NgModule({
  declarations: [
    CrearTablaComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule
  ]
})
export class TablaModule { }
