import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiURL: string= 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
      return this.http.get<Flight[]>(this.apiURL);
  
    }

}
