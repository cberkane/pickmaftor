import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import {OverlayModule} from '@angular/cdk/overlay'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { IconComponent } from './components/icon/icon.component';
import { HomeComponent } from './page/home/home.component';
import { IngredientsComponent } from './page/ingredients/ingredients.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    IconComponent,
    HomeComponent,
    IngredientsComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule,

    // PWA 
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
