import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargesComponent } from './charges/charges.component';
import { TaxesComponent } from './taxes/taxes.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { AreaComponent } from './area/area.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
    },
    {
      path: 'charges',
      component: ChargesComponent
    },
    {
      path: 'taxes',
      component: TaxesComponent
    },
    {
      path: 'countries',
      component: CountriesComponent
    },
    {
      path: 'states',
      component: StatesComponent
    },
    {
      path: 'cities',
      component: CitiesComponent
    },
    {
      path: 'area',
      component: AreaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
