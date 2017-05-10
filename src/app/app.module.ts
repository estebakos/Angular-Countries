import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'city', component: CityComponent
  },
  { path: 'country', component: CountryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryComponent,
    CityComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
