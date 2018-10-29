import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { LaunchesService } from '@app/core/services';
import { LaunchStatusActionTypes, LaunchStatusLoaded } from '@app/core/reducers/launch-status/launch-status.actions';

@Injectable()
export class LaunchStatusEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(LaunchStatusActionTypes.LoadLaunchStatus)
    .pipe(
      mergeMap(() =>
        this.launchesService
          .getStatusTypes$()
          .pipe(map(status => new LaunchStatusLoaded(status)))
      )
    );

  constructor(private actions$: Actions,
              private launchesService: LaunchesService) {}
}
