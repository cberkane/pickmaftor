import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import {OverlayModule} from '@angular/cdk/overlay'; 
import {MatRippleModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipePickerComponent } from './components/recipe-picker/recipe-picker.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipePickerComponent,
    SidenavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRippleModule,
    OverlayModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
