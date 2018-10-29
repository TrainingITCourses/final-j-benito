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
    EffectsModule.forRoot([LaunchStatusEffects])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
