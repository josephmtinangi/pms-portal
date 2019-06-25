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
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { LeaseCreateComponent } from './leases/lease-create/lease-create.component';
import { RealEstateAgentsCreateComponent } from './real-estate-agents/real-estate-agents-create/real-estate-agents-create.component';
import { RealEstateAgentsListComponent } from './real-estate-agents/real-estate-agents-list/real-estate-agents-list.component';
import { CustomerPaymentsComponent } from './customer-payments/customer-payments.component';
import { LeaseListComponent } from './leases/lease-list/lease-list.component';
import { LeaseDetailComponent } from './leases/lease-detail/lease-detail.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoices/invoice-detail/invoice-detail.component';

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
      { path: 'clients/:id', component: ClientDetailComponent, canActivate: [DashboardGuard] },
      
      { path: 'properties', component: PropertyListComponent, canActivate: [DashboardGuard] },
      { path: 'properties/create', component: PropertyCreateComponent, canActivate: [DashboardGuard]},
      { path: 'properties/:id', component: PropertyDetailComponent, canActivate: [DashboardGuard] },

      { path: 'customers', component: CustomerListComponent, canActivate: [DashboardGuard] },
      { path: 'customers/create', component: CustomerCreateComponent, canActivate: [DashboardGuard] },
      { path: 'customers/:id', component: CustomerDetailComponent, canActivate: [DashboardGuard] },

      { path: 'leases/create', component: LeaseCreateComponent, canActivate: [DashboardGuard] },
      { path: 'leases', component: LeaseListComponent, canActivate: [DashboardGuard] },
      { path: 'leases/:id', component: LeaseDetailComponent, canActivate: [DashboardGuard]},

      { path: 'invoices', component: InvoiceListComponent, canActivate: [DashboardGuard] },
      { path: 'invoices/:id', component: InvoiceDetailComponent, canActivate: [DashboardGuard] },

      { path: 'customer-payments', component: CustomerPaymentsComponent, canActivate: [DashboardGuard]},

      { path: 'real-estate-agents/create', component: RealEstateAgentsCreateComponent, canActivate: [DashboardGuard]},
      { path: 'real-estate-agents', component: RealEstateAgentsListComponent, canActivate: [DashboardGuard]},

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
