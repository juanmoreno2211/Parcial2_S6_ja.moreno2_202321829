import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineListComponent } from './airline-list/airline-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AirlineListComponent],
  declarations: [AirlineListComponent]
})
export class AirlineModule { }
