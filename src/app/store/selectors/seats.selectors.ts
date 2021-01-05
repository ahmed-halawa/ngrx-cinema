import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSeatsReducer from '../reducers/seats.reducer';

export const getSeatsSelectAll = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectAll
);

export const getSeatsSelectEntities = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectEntities
);

export const getSeatsSelectIds = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectIds
);

export const getSeatsSelectTotal = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectTotal
);

export const selectSeatsPending = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectSeatsPending
);

export const selectSeatsError = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectSeatsError
);

export const selectSeatsRoom = createSelector(
  fromFeature.getSeatsState,
  fromSeatsReducer.selectSeatsRoom
);

export const selectLeftSideSeats = createSelector(getSeatsSelectAll, (seats) =>
  seats.filter((seat) => seat.position === 'left')
);

export const selectRightSideSeats = createSelector(getSeatsSelectAll, (seats) =>
  seats.filter((seat) => seat.position === 'right')
);

export const selectCenterSideSeats = createSelector(
  getSeatsSelectAll,
  (seats) => seats.filter((seat) => seat.position === 'center')
);

export const selectVipNoReservedSeatsCount = createSelector(
  getSeatsSelectAll,
  (seats) => {
    const vipSeats = seats.filter(
      (seat) => seat.status === 'vip' && !seat.reserved
    );
    return vipSeats && vipSeats.length;
  }
);

export const selectVipReservedSeatsCount = createSelector(
  getSeatsSelectAll,
  (seats) => {
    const vipSeats = seats.filter(
      (seat) => seat.status === 'vip' && seat.reserved
    );
    return vipSeats && vipSeats.length;
  }
);

export const selectStandardNoReservedSeatsCount = createSelector(
  getSeatsSelectAll,
  (seats) => {
    const vipSeats = seats.filter(
      (seat) => seat.status === 'standard' && !seat.reserved
    );
    return vipSeats && vipSeats.length;
  }
);

export const selectStandardReservedSeatsCount = createSelector(
  getSeatsSelectAll,
  (seats) => {
    const vipSeats = seats.filter(
      (seat) => seat.status === 'standard' && seat.reserved
    );
    return vipSeats && vipSeats.length;
  }
);

export const selectEconomicalNoReservedSeatsCount = createSelector(
  getSeatsSelectAll,
  (seats) => {
    const vipSeats = seats.filter(
      (seat) => seat.status === 'economical' && !seat.reserved
    );
    return vipSeats && vipSeats.length;
  }
);

export const selectEconomicalReservedSeatsCount = createSelector(
  getSeatsSelectAll,
  (seats) => {
    const vipSeats = seats.filter(
      (seat) => seat.status === 'economical' && seat.reserved
    );
    return vipSeats && vipSeats.length;
  }
);
