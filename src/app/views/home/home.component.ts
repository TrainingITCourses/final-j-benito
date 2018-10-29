import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';
import { LoadLaunchStatus } from '@app/core/reducers/launch-status/launch-status.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public launchStatus: any[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadLaunchStatus());

    this.store
      .select('launchStatus')
      .subscribe(payload => {
        this.launchStatus = payload.launchStatus;
        console.log('asdfas', this.launchStatus);
      });
  }

}
