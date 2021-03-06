import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';
import { LoadLaunches } from '@app/core/reducers/launches/launches.actions';
import { LoadLaunchStatus } from '@app/core/reducers/launch-status/launch-status.actions';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  public stateUrl$: BehaviorSubject<string> = new BehaviorSubject('');
  public launchesNumber$: BehaviorSubject<number> = new BehaviorSubject(0);
  public selectedLaunchStatusName$: BehaviorSubject<string> = new BehaviorSubject('');
  public selectedLaunchName$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaunchStatus());
    this.store.dispatch(new LoadLaunches());

    this.store
    .select('launches')
    .subscribe(store => {
      this.launchesNumber$.next(store.launches.length);
    });

    this.store
    .select('router')
    .subscribe(router => {
        this.stateUrl$.next(router ? router.state.url : null);
    });

    this.store
    .select('selectedLaunchStatus')
    .subscribe(payload => {
      if (payload && payload.status) {
        this.selectedLaunchStatusName$.next(payload.status.name);
      }
    });

    this.store
    .select('selectedLaunch')
    .subscribe(payload => {
      if (payload && payload.launch) {
        this.selectedLaunchName$.next(payload.launch.name);
      }
    });
  }

}
