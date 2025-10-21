import { Routes } from '@angular/router';
import { FormPageComponent } from './features/form-page/form-page.component';
import { DetailsPageComponent } from './features/details-page/details-page.component';

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
    path: 'details',
    component: DetailsPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
