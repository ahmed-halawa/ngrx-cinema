import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-left-side',
  template: `
    <div class="left-side">
      <div class="left-side__line"></div>
      <app-seat
        *ngFor="let seat of seats; let i = index"
        [seat]="seat"
        (click)="reserve.emit(seat)"
      ></app-seat>
    </div>
  `,
  styleUrls: ['./left-side.component.scss'],
})
export class LeftSideComponent implements OnInit {
  @Input() seats: fromModels.ISeat[];
  @Output() reserve = new EventEmitter<fromModels.ISeat[]>();

  constructor() {}

  ngOnInit() {}
}
