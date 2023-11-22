import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private httpClient: HttpClient) {}

  searchCountries(searchTerm: string): Observable<any[]> {
    const url = `${this.apiUrl}/countries?searchTerm=${searchTerm}`;
    return this.httpClient.get<any[]>(url);
  }
}
