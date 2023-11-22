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

  constructor(private countriesService: CountriesService) {}

  search(): void {
    this.countriesService.searchCountries(this.searchTerm).subscribe(
      (data) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error al realizar la búsqueda:', error);
      }
    );
  }
}
