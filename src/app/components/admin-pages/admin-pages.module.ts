import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { ChargesComponent } from './charges/charges.component';
import { TaxesComponent } from './taxes/taxes.component';
import { SharedModule } from '../../theme/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { AreaComponent } from './area/area.component';


@NgModule({
  declarations: [ChargesComponent, TaxesComponent, CitiesComponent, CountriesComponent, StatesComponent, AreaComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SharedModule,
    AdminPagesRoutingModule
  ]
})
export class AdminPagesModule { }
