import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';

const routes : Routes = [
      {
      path : 'heroes',
      component : HeroesComponent
      },
      {
      path : 'dashboard',
      component : DashboardComponent
      },
      {
      path : '',
      redirectTo : '/dashboard',
      pathMatch : 'full'
      },
      {
      path : 'detail/:id',
      component : HeroDetailComponent
      },
      {
      path : 'development',
      component : UnderDevelopmentComponent
      }
    ];

@NgModule({
	imports :[RouterModule.forRoot(routes)],
	exports : [RouterModule]
	})

export class AppRoutingModule {}