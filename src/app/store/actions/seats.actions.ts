import { createAction, props } from '@ngrx/store';
import * as fromModels from '../../models';

// Load seats
export const loadSeats = createAction(
  '[Cinema] [Seats] load seats',
  props<{ payload: 'A' | 'C' | 'D' | 'R' }>()
);
export const loadSeatsSuccess = createAction(
  '[Cinema] [Seats] load seats success',
  props<{ payload: fromModels.ISeat[] }>()
);
export const loadSeatsFailure = createAction(
  '[Cinema] [Seats] load seats failure',
  props<{ payload: Error }>()
);

// Reserve seat
export const reserve = createAction(
  '[Cinema] [Seats] reserve seat',
  props<{ payload: fromModels.ISeat }>()
);
