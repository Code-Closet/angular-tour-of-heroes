import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownMockData } from './dropdown/mock-dropdown';
import { DropdownService } from './dropdown/dropdown-service';
import { KpitileComponent } from './kpitile/kpitile.component';
import { KpiSelectionComponent } from './kpi-selection/kpi-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    UnderDevelopmentComponent,
    HeroSearchComponent,
    DropdownComponent,
    KpitileComponent,
    KpiSelectionComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    InMemoryWebApiModule.forRoot(DropdownMockData)
  ],
  providers: [HeroService,DropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
