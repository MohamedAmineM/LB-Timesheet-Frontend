import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login/login.component';
import { HomeComponent } from './screens/home/home/home.component';

const routes: Routes = [

  

  {
    path: 'home', loadChildren: () => import('./screens/home/home/home.module').then(m => m.HomeModule),
    data: {preload: true, delay: false}
  },
  {
    path: 'login', loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule),
    data: {preload: true, delay: false}
  },
  {
    path: '', loadChildren: () => import('./screens/home/home/home.module').then(m => m.HomeModule),
    data: {preload: true, delay: false}
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
