import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from '../countries.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, HttpClientTestingModule, HttpClientModule],
      providers: [CountriesService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the div initially', () => {
    expect(component.noResultsFlag).toBeFalsy();
    const divElement = fixture.nativeElement.querySelector('.alert-danger');
    expect(divElement).toBeNull();
  });

  it('should show the div when noResultsFlag is true', () => {
    component.noResultsFlag = true;
    fixture.detectChanges();

    const divElement = fixture.nativeElement.querySelector('.alert-danger');
    expect(divElement).toBeTruthy();
  });

  it('should hide the div when noResultsFlag is false', () => {
    component.noResultsFlag = false;
    fixture.detectChanges();
    const divElement = fixture.nativeElement.querySelector('.alert-danger');
    expect(divElement).toBeNull();
  });
});

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService],
    });

    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
