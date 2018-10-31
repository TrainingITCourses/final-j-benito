import { Action } from '@ngrx/store';

export enum SelectedLaunchActionTypes {
  LoadSelectedLaunchs = '[SelectedLaunch] Load SelectedLaunchs'
}

export class LoadSelectedLaunchs implements Action {
  readonly type = SelectedLaunchActionTypes.LoadSelectedLaunchs;
  constructor(readonly payload: any[]) {}
}

export type SelectedLaunchActions = LoadSelectedLaunchs;
