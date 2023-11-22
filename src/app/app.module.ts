import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, CommonModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
