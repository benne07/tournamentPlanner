import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Turniere', url: '/menu/tournaments', icon: 'mail' },
    { title: 'Mannschaften', url: '/menu/teams', icon: 'paper-plane' },
    { title: 'Favorites', url: '/menu/favorites', icon: 'heart' },
    { title: 'Dashboard', url: '/menu/dashboard',icon: 'bar-chart-outline'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
