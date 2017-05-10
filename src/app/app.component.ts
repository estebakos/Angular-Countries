import { Component } from '@angular/core';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Funciona una RetroChimba!';
  vergazo = 'Si Qué si';
}
