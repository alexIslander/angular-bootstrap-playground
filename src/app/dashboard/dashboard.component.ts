import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }
}
