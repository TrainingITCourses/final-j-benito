import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { State } from '@app/core/reducers';
import { EjemploService } from '@app/ejemplo.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public launchStatus$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private store: Store<State>, private ejemplo: EjemploService) { }

  ngOnInit() {
    this.store
      .select('launchStatus')
      .subscribe(payload => {
        this.launchStatus$.next(payload.launchStatus);
      });
  }

}
