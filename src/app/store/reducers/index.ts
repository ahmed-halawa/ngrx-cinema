import { createFeatureSelector } from '@ngrx/store';

import * as fromSeatsReducer from './seats.reducer';
import * as fromModels from '../../models';

export interface IRootState {
  seats: fromSeatsReducer.ISeatsState;
}

export const reducers = {
  seats: fromSeatsReducer.reducer,
};

export const getRouterState = createFeatureSelector<fromModels.RouterStateUrl>(
  'router'
);

export const getSeatsState = createFeatureSelector<fromSeatsReducer.ISeatsState>(
  'seats'
);
