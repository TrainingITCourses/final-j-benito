import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  public selectLaunch: any;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store
    .select('selectedLaunch')
    .subscribe(payload => {
      this.selectLaunch = payload.launch;
    });
  }

}
