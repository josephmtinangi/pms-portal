import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { DashboardGuard } from './dashboard.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
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
      { path: 'clients', component: ClientListComponent, canActivate: [DashboardGuard]},
      { path: 'clients/create', component: ClientCreateComponent, canActivate: [DashboardGuard]},
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
    ]
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
