import { Action } from '@ngrx/store';

export enum DataActionTypes {
  LoadStatus = '[Data] Load Datas',
  StatusLoaded = '[Data] Data Loaded',
  LoadLaunches = '[Data] Load Launches',
  LaunchesLoaded = '[Data] Data Loaded'
}

export class LoadStatus implements Action {
  readonly type = DataActionTypes.LoadStatus;
}

export class StatusLoaded implements Action {
  readonly type = DataActionTypes.StatusLoaded;
  constructor(readonly statusPayload: any[]) {}
}

export class LoadLaunches implements Action {
  readonly type = DataActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = DataActionTypes.LaunchesLoaded;
  constructor(readonly launchesPayload: any[]) {}
}

export type DataActions =
  LoadStatus |
  StatusLoaded |
  LoadLaunches |
  LaunchesLoaded;
