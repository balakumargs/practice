import { Component } from '@angular/core';
import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emblem = '';

   states: State[] = [
    {
      name: 'Tamil Nadu',
      capital: 'Chennai',
      chiefMininister: 'Stalin',
      totalDistricts: 38,
    },
    {
      name: 'Kerala',
      capital: 'Thiruvananthapuram',
      chiefMininister: 'Pinarayi Vijayan',
      totalDistricts: 14,
    },
    {
      name: 'Karnataka',
      capital: 'Bangalore',
      chiefMininister: 'Siddaramaiah',
      totalDistricts: 31,
    },
    {
      name: 'Maharashtra',
      capital: 'Mumbai',
      chiefMininister: 'Eknath Shinde',
      totalDistricts: 36,
    }
  ]

  
}
