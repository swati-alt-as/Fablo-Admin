import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  children: [    
    {
      path: '',
      loadChildren: () => import('././login/login.module').then(module => module.LoginModule)
    },
    {
      path: 'signin',
      loadChildren: () => import('././login/login.module').then(module => module.LoginModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
