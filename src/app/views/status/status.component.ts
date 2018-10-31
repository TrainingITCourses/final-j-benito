import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { State } from '@app/core/reducers';
import { ActivatedRoute } from '@angular/router';
import { LoadSelectedLaunchStatus } from '@app/core/reducers/selected-launch-status/selected-launch-status.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  public filteredLaunches: any[];
  public filteredLaunches$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public sortOrder: boolean;

  constructor(private route: ActivatedRoute,
              private store: Store<State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const statusId = Number(params['id']);

      this.store
        .select('launchStatus')
        .subscribe(payload => {
          const selectedLaunchStatus = payload.launchStatus.find(status => status.id === statusId);
          this.store.dispatch(new LoadSelectedLaunchStatus(selectedLaunchStatus));
        });

      this.store
        .select('launches')
        .subscribe(payload => {
          const launches = payload.launches;
          this.filteredLaunches = launches.filter(
            launch => launch.status === statusId
          );
          this.filteredLaunches$.next(this.filteredLaunches);
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
