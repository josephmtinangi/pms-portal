import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { DashboardGuard } from './dashboard.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'properties',
    component: PropertyListComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: '**',
    redirectTo: '',
    canActivate: [DashboardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
