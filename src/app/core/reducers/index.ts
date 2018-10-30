import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '@env/environment';
import * as fromLaunches from './launches/launches.reducer';
import * as fromLaunchStatus from './launch-status/launch-status.reducer';

export interface State {
  router: any;
  launches: fromLaunches.LaunchesState;
  launchStatus: fromLaunchStatus.LaunchStatusState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  launches: fromLaunches.reducer,
  launchStatus: fromLaunchStatus.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
