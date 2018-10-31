import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';
import { ActivatedRoute } from '@angular/router';
import { LoadSelectedLaunch } from '@app/core/reducers/selected-launch/selected-launch.actions';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  public selectedLaunch: any;

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const launchId = Number(params['id']);

      this.store
        .select('launches')
        .subscribe(payload => {
          this.selectedLaunch = payload.launches.find(launch => launch.id === launchId);
          this.store.dispatch(new LoadSelectedLaunch(this.selectedLaunch));
        });
    });
  }

}
