import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FormPageComponent } from './features/form-page/form-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'form',
    component: FormPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
