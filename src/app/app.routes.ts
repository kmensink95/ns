import { Routes } from '@angular/router';
import { FormPageComponent } from './features/form-page/form-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FormPageComponent,
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
