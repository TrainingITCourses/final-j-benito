import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchesService } from '@app/core/services';
import { mergeMap, map } from 'rxjs/operators';

import { LaunchesLoaded, LaunchesActionTypes } from './launches.actions';

@Injectable()
export class LaunchesEffects {


  @Effect()
  public loadLaunches$ = this.actions$
    .ofType(LaunchesActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.launchesService
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  constructor(private actions$: Actions,
              private launchesService: LaunchesService) {}
}
