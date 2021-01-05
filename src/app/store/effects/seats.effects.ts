import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class SeatsEffects {
  constructor(
    private actions$: Actions,
    private seatsService: fromServices.SeatsService
  ) {}

  getSeats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadSeats),
      switchMap(({ payload }) =>
        this.seatsService.getSeats(payload).pipe(
          map((data) => fromActions.loadSeatsSuccess({ payload: data })),
          catchError((err) => of(fromActions.loadSeatsFailure({ payload: err })))
        )
      )
    )
  );
}
