import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './Heroes/hero-details.component';
import { HeroService } from './Heroes/hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
     AppComponent,
     HeroDetailComponent,
     HeroesComponent,
     DashboardComponent
  ],
  providers:[ HeroService ],
  bootstrap:[ AppComponent ],
  
})
export class AppModule { }