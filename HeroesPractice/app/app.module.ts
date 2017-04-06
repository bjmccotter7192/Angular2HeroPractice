import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './Routing/app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './FakeWebAPI/in-memory-data.service';

import { AppComponent } from './Component/app.component';
import { HeroesComponent } from './Hero/Component/heroes.component';
import { HeroDetailComponent } from './Hero/Details/hero-details.component';
import { HeroService } from './Hero/Service/hero.service';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { HeroSearchComponent } from './Hero/Search/hero-search.component';


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule    
  ],
  declarations: [
     AppComponent,
     DashboardComponent,
     HeroDetailComponent,
     HeroesComponent,
     HeroSearchComponent
  ],
  providers:[ HeroService ],
  bootstrap:[ AppComponent ],
})
export class AppModule { }
