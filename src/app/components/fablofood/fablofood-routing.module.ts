import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailsComponent} from '../fablofood/business/business-details/business-details.component'
import { AllbusinessListComponent} from '../fablofood/business/allbusiness-list/allbusiness-list.component'

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: AllbusinessListComponent
    },
    {
      path: 'BusinessList',
      component: AllbusinessListComponent
    },
    {
      path: 'BusinessDetails/:businessid',
      component: BusinessDetailsComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FablofoodRoutingModule { }
