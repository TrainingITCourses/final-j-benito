import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch.component';
import { EjemploService } from '@app/ejemplo.service';

@NgModule({
  imports: [
    CommonModule,
    LaunchRoutingModule
  ],
  declarations: [
    LaunchComponent
  ],
  providers: [
    EjemploService
  ]
})
export class LaunchModule { }
