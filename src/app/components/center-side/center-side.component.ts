import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-center-side',
  templateUrl: './center-side.component.html',
  styleUrls: ['./center-side.component.scss'],
})
export class CenterSideComponent implements OnInit {
  @Input() seats: fromModels.ISeat[];
  @Output() reserve = new EventEmitter<fromModels.ISeat[]>();

  constructor() {}

  ngOnInit() {}
}
