import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenav-demo';
  categories = [
    {
      name: 'Windows',
      count: 15,
      id: '98769'
    },
    {
      name: 'Rooms',
      count: 15,
      id: '567832'
    },
    {
      name: 'Specialty Equiptment',
      count: 0,
      id: '327892'
    },
    {
      name: 'Loans',
      count: 0,
      id: '243892'
    },
    ];
}
