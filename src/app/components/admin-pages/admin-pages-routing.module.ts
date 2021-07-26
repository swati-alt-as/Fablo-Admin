import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
