import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { environment } from 'src/environments/environment';
import { CustomSerializer } from './utils/custom-serializer';
import { AppComponent } from './app.component';
import * as fromStore from './store';
import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    AppComponent,
    ...fromContainers.CONTAINERS,
    ...fromComponents.COMPONENTS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    StoreModule.forRoot(fromStore.reducers, {
      metaReducers: [],
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    EffectsModule.forRoot(fromStore.EFFECTS),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
