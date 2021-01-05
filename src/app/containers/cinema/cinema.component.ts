import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromModels from '../../models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  leftSideSeats$: Observable<fromModels.ISeat[]>;
  rightSideSeats$: Observable<fromModels.ISeat[]>;
  centerSideSeats$: Observable<fromModels.ISeat[]>;
  selectedRoom$: Observable<'A' | 'C' | 'D' | 'R'>;

  pending$: Observable<boolean>;

  vipReservedCount$: Observable<number>;
  vipNonReservedCount$: Observable<number>;
  standardReservedCount$: Observable<number>;
  standardNonReservedCount$: Observable<number>;
  economicalReservedCount$: Observable<number>;
  economicalNonReservedCount$: Observable<number>;

  constructor(private store: Store<fromStore.IRootState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.loadSeats({ payload: 'A' }));

    this.leftSideSeats$ = this.store.pipe(
      select(fromStore.selectLeftSideSeats)
    );

    this.rightSideSeats$ = this.store.pipe(
      select(fromStore.selectRightSideSeats)
    );

    this.centerSideSeats$ = this.store.pipe(
      select(fromStore.selectCenterSideSeats)
    );

    this.selectedRoom$ = this.store.pipe(select(fromStore.selectSeatsRoom));

    this.pending$ = this.store.pipe(select(fromStore.selectSeatsPending));

    this.vipReservedCount$ = this.store.pipe(
      select(fromStore.selectVipReservedSeatsCount)
    );
    this.vipNonReservedCount$ = this.store.pipe(
      select(fromStore.selectVipNoReservedSeatsCount)
    );

    this.standardReservedCount$ = this.store.pipe(
      select(fromStore.selectStandardReservedSeatsCount)
    );
    this.standardNonReservedCount$ = this.store.pipe(
      select(fromStore.selectStandardNoReservedSeatsCount)
    );

    this.economicalReservedCount$ = this.store.pipe(
      select(fromStore.selectEconomicalReservedSeatsCount)
    );
    this.economicalNonReservedCount$ = this.store.pipe(
      select(fromStore.selectEconomicalNoReservedSeatsCount)
    );
  }

  reserve($event: fromModels.ISeat) {
    this.store.dispatch(fromStore.reserve({ payload: $event }));
  }

  selectRoom($event: 'A' | 'C' | 'D' | 'R') {
    this.store.dispatch(fromStore.loadSeats({ payload: $event }));
  }
}
