import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
  imports: [FormsModule],
 // providers: [CountriesService]
})
export class SearchComponent {
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private countriesService: CountriesService) {}

  search(): void {
    this.countriesService.searchCountries(this.searchTerm).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error al realizar la búsqueda:', error);
      }
    );
  }
}