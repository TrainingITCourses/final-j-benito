import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';
import { LoadSelectedLaunchStatus } from '@app/core/reducers/selected-launch-status/selected-launch-status.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public launchStatus: any[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store
      .select('launchStatus')
      .subscribe(payload => {
        this.launchStatus = payload.launchStatus;
      });
  }

}
