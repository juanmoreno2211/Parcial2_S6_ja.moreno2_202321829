import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airlines: Array<Airline> = [];


  constructor(private airlineService: AirlineService) { }

  getAirlines(): void {
    this.airlineService.getAirlines().subscribe((airlines) => {
     this.airlines = airlines});
    }

  ngOnInit() {
    this.getAirlines();
  }

}
