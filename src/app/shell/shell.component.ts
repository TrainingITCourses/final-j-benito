import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';
import { LoadLaunches } from '@app/core/reducers/launches/launches.actions';
import { LoadLaunchStatus } from '@app/core/reducers/launch-status/launch-status.actions';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  public stateUrl: string;
  public launchesNumber: number;
  public selectedLaunchStatusName: string;
  public selectedLaunchName: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaunchStatus());
    this.store.dispatch(new LoadLaunches());

    this.store
    .select('launches')
    .subscribe(store => {
      this.launchesNumber = store.launches.length;
    });

    this.store
    .select('router')
    .subscribe(router => {
        this.stateUrl = router ? router.state.url : null;
    });

    this.store
    .select('selectedLaunchStatus')
    .subscribe(payload => {
      this.selectedLaunchStatusName = payload.status.name;
    });

    this.store
    .select('selectedLaunch')
    .subscribe(payload => {
      this.selectedLaunchName = payload.launch.name;
    });
  }

}
