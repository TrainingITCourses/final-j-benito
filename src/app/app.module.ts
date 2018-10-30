import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from '@app/shell/shell.module';
import { reducers, metaReducers } from '@app/core/reducers';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchStatusEffects } from '@app/core/reducers/launch-status/launch-status.effects';
import { LaunchesEffects } from '@app/core/reducers/launches/launches.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShellModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([LaunchStatusEffects, LaunchesEffects])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
