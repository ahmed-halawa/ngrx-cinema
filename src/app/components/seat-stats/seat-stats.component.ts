import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat-stats',
  templateUrl: './seat-stats.component.html',
  styleUrls: ['./seat-stats.component.scss'],
})
export class SeatStatsComponent {
  @Input() data: { name: string; value: number }[];

  colorScheme = {
    domain: [
      '#f84b5a',
      '#ffa62d',
      '#7020fe',
      '#f84b5a80',
      '#ffa62d80',
      '#7020fe80',
    ],
  };
}
