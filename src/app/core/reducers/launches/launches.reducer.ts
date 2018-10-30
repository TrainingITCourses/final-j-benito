import { Action } from '@ngrx/store';
import { LaunchesActionTypes, LaunchesActions } from './launches.actions';

export interface LaunchesState {
  launches: any[];
  launchesLoaded: boolean;
}

export const initialState: LaunchesState = {
  launches: [],
  launchesLoaded: false
};

export function reducer(state = initialState, action: LaunchesActions): LaunchesState {
  switch (action.type) {
    case LaunchesActionTypes.LoadLaunches:
      return { ...state };
    case LaunchesActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload, launchesLoaded: true };
    default:
      return state;
  }
}
