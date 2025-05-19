import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from './airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private apiURL: string= 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';
  constructor(private http: HttpClient) { }

  getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(this.apiURL);

  }

}
