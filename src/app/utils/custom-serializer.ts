import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

import * as fromModels from '../models';

// Custom Serializer for ngrx router store
@Injectable()
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<fromModels.RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): fromModels.RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}
