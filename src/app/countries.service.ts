import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private apiUrl = 'http://127.0.0.1:3000';
  constructor(public http: HttpClient) {}

  searchCountries(searchTerm: string): Observable<any[]> {
    const url = `${this.apiUrl}/countries?searchTerm=${searchTerm}`;
    return this.http.get<any[]>(url);
  }
}
