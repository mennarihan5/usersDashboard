import { Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';

export const routes: Routes = [
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full' }
];
