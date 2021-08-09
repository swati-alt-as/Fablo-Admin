import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
    ]
  },
  {
    path: 'Administrator',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/admin-pages/admin-pages.module').then(module => module.AdminPagesModule)
      },
    ]
  },
  {
    path: 'Employee',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/employee/employee.module').then(module => module.EmployeeModule)
      },
    ]
  },
  {
    path: 'Fablo-Food',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/fablofood/fablofood.module').then(module => module.FablofoodModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
