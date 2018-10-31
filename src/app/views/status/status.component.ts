import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';
import { ActivatedRoute } from '@angular/router';
import { LoadSelectedLaunchStatus } from '@app/core/reducers/selected-launch-status/selected-launch-status.actions';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  public selectedLaunchStatus: any;
  public filteredLaunches: any[];
  public sortOrder: boolean;

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const statusId = Number(params['id']);

      this.store
        .select('launchStatus')
        .subscribe(payload => {
          this.selectedLaunchStatus = payload.launchStatus.find(status => status.id === statusId);
          this.store.dispatch(new LoadSelectedLaunchStatus(this.selectedLaunchStatus));
        });

      this.store
        .select('launches')
        .subscribe(payload => {
          const launches = payload.launches;
          this.filteredLaunches = launches.filter(
            launch => launch.status === statusId
          );
        });
    });
  }

  sortLaunches() {
    this.sortOrder = this.sortOrder ? !this.sortOrder : true;
    if (this.sortOrder) {
      this.filteredLaunches.sort((a, b) => new Date(b.windowstart).getTime() - new Date(a.windowstart).getTime());
    } else {
      this.filteredLaunches.sort((a, b) => new Date(a.windowstart).getTime() - new Date(b.windowstart).getTime());
    }
  }
}
