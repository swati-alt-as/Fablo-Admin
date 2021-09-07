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
      path: 'businesslist',
      component: AllbusinessListComponent
    },
    {
      path: 'businessdetails/:businessid',
      component: BusinessDetailsComponent
    },
    {
      path: 'kyclist/:kycStatus',
      component: KycListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FablofoodRoutingModule { }
