import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  
  flights: Array<Flight>= [];
  constructor(private flightService: FlightService) { }

  getFlights(): void {
    this.flightService.getFlights().subscribe((flights) => {
      this.flights = flights;
    });
  }

  ngOnInit() {
  }

}
