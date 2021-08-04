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
      path: 'Charges',
      component: ChargesComponent
    },
    {
      path: 'Taxes',
      component: TaxesComponent
    },
    {
      path: 'Countries',
      component: CountriesComponent
    },
    {
      path: 'States',
      component: StatesComponent
    },
    {
      path: 'Cities',
      component: CitiesComponent
    },
    {
      path: 'Area',
      component: AreaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
