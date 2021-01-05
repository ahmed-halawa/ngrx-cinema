import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-right-side',
  template: `
    <div class="right-corner">
      <div class="right-corner__line"></div>
      <app-seat
        *ngFor="let seat of seats"
        [seat]="seat"
        (click)="reserve.emit(seat)"
      ></app-seat>
    </div>
  `,
  styleUrls: ['./right-side.component.scss'],
})
export class RightSideComponent implements OnInit {
  @Input() seats: fromModels.ISeat[];
  @Output() reserve = new EventEmitter<fromModels.ISeat[]>();

  constructor() {}

  ngOnInit() {}
}
