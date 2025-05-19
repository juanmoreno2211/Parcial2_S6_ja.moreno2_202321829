import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FlightListComponent],
  declarations: [FlightListComponent]
})
export class FlightModule { }
