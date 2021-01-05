import { Component, Input, OnInit } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seat: fromModels.ISeat;

  constructor() {}

  ngOnInit() {}
}
