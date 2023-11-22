import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule, CommonModule],
})
export class SearchComponent {
  searchTerm: string = '';
  searchResults: any = [];
  noResultsFlag = false;
  constructor(private countriesService: CountriesService) {}

  search(): void {
    this.countriesService.searchCountries(this.searchTerm).subscribe(
      (data) => {
        this.searchResults = data;
        this.noResultsFlag = this.searchResults.length === 0;
      },
      (error) => {
        console.error('Error al realizar la búsqueda:', error);
      }
    );
  }
}
