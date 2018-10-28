import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@app/core/reducers';

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
      .select('data')
      .subscribe(data => {
        this.launchStatus = data.status;
        console.log('asdfas', this.launchStatus);
      });
  }

}
