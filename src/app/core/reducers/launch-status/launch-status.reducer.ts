import { Action } from '@ngrx/store';
import { LaunchStatusActions, LaunchStatusActionTypes } from '@app/core/reducers/launch-status/launch-status.actions';

export interface LaunchStatusState {
  launchStatus: any[];
  launchStatusLoaded: boolean;
}

export const initialState: LaunchStatusState = {
  launchStatus: [],
  launchStatusLoaded: false,
};

export function reducer(state = initialState, action: LaunchStatusActions): LaunchStatusState {
  switch (action.type) {
    case LaunchStatusActionTypes.LoadLaunchStatus:
      return { ...state };
    case LaunchStatusActionTypes.LaunchStatusLoaded:
      return { ...state, launchStatus: action.payload, launchStatusLoaded: true };
    default:
      return state;
  }
}
