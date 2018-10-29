import { Action } from '@ngrx/store';
import { DataActionTypes, DataActions } from './data.actions';

export interface DataState {
  status: any[];
  statusLoaded: boolean;
  launches: any[];
  launchesLoaded: boolean;
}

export const initialState: DataState = {
  status: [],
  statusLoaded: false,
  launches: [],
  launchesLoaded: false
};

export function reducer(state = initialState, action: DataActions): DataState {
  switch (action.type) {
    case DataActionTypes.LoadLaunches:
      return { ...state };
    case DataActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload, launchesLoaded: true };
    default:
      return state;
  }
}
