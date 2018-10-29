import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromData from './data/data.reducer';
import * as fromLaunchStatus from './launch-status/launch-status.reducer';

export interface State {
  data: fromData.DataState;
  launchStatus: fromLaunchStatus.LaunchStatusState;
}

export const reducers: ActionReducerMap<State> = {
  data: fromData.reducer,
  launchStatus: fromLaunchStatus.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
