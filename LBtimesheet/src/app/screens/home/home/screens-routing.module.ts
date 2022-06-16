import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';






const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    {
      path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {preload: true, delay: false}
    },
    {
      path: 'teams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
      data: {preload: true, delay: false}
    },
    {
      path: 'profiles', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      data: {preload: true, delay: false}
    },
      {
        path: 'coworkers', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'projects', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'job-titles', loadChildren: () => import('./job-title/job-title.module').then(m => m.JobTitleModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
        data: {preload: true, delay: false}
      },
      
      {path: '**', redirectTo: ''}
  ]}
  
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  
  })
  export class ScreensRoutingModule { }