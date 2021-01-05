import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.scss'],
})
export class SelectRoomComponent implements OnInit {
  @Output() selectRoom = new EventEmitter<'A' | 'C' | 'D' | 'R'>();
  @Input() selectedRoom: 'A' | 'C' | 'D' | 'R';

  constructor() {}

  ngOnInit() {}
}
