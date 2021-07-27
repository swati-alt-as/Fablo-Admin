import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailsComponent} from './business/business-details/business-details.component'
import { AllbusinessListComponent} from './business/allbusiness-list/allbusiness-list.component'
import { KycListComponent } from './kyc/kyc-list/kyc-list.component';
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
    {
      path: 'Kyc-List/:kycStatus',
      component: KycListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FablofoodRoutingModule { }
