import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchesService } from '@app/core/services';
import { mergeMap, map } from 'rxjs/operators';

import { LaunchesLoaded, DataActionTypes, StatusLoaded } from './data.actions';

@Injectable()
export class DataEffects {


  @Effect()
  public loadLaunches$ = this.actions$
    .ofType(DataActionTypes.LoadLaunches)
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
