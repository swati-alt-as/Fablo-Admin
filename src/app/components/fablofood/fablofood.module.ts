import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FablofoodRoutingModule } from './fablofood-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FablofoodRoutingModule
  ]
})
export class FablofoodModule { }
