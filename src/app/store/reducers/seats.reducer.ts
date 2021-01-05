import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as fromActions from '../actions';
import * as fromModels from '../../models';

export const seatsAdapter = createEntityAdapter<fromModels.ISeat>({
  sortComparer: (a, b) => a.order - b.order,
});

export interface ISeatsState extends EntityState<fromModels.ISeat> {
  room: 'A' | 'C' | 'R' | 'D';
  pending: boolean;
  error: Error;
}

export const initialState: ISeatsState = seatsAdapter.getInitialState({
  room: undefined,
  pending: false,
  error: undefined,
});

export const seatsReducer = createReducer(
  initialState,

  on(fromActions.loadSeats, (state, { payload }) => ({
    ...state,
    room: payload,
    pending: true,
    error: undefined,
  })),
  on(fromActions.loadSeatsSuccess, (state, { payload }) =>
    seatsAdapter.setAll(payload, {
      ...state,
      pending: false,
      error: undefined,
    })
  ),
  on(fromActions.loadSeatsFailure, (state, { payload }) => ({
    ...state,
    pending: false,
    error: payload,
  })),

  // Reserve seat
  on(fromActions.reserve, (state, { payload }) =>
    seatsAdapter.updateOne(
      {
        id: payload.id,
        changes: {
          reserved: true,
        },
      },
      state
    )
  )
);

export function reducer(state: ISeatsState | undefined, action: Action) {
  return seatsReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = seatsAdapter.getSelectors();

export const selectSeatsPending = (state: ISeatsState) => state.pending;
export const selectSeatsError = (state: ISeatsState) => state.error;
export const selectSeatsRoom = (state: ISeatsState) => state.room;
