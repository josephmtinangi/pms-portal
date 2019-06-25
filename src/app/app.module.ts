import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { DashboardGuard } from './dashboard.guard';
import { LogoutComponent } from './logout/logout.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { LeaseCreateComponent } from './leases/lease-create/lease-create.component';
import { RealEstateAgentsListComponent } from './real-estate-agents/real-estate-agents-list/real-estate-agents-list.component';
import { RealEstateAgentsCreateComponent } from './real-estate-agents/real-estate-agents-create/real-estate-agents-create.component';
import { CustomerPaymentsComponent } from './customer-payments/customer-payments.component';
import { LeaseListComponent } from './leases/lease-list/lease-list.component';
import { LeaseDetailComponent } from './leases/lease-detail/lease-detail.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { InvoiceDetailComponent } from './invoices/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { RegionCreateComponent } from './regions/region-create/region-create.component';
import { ClientTypeListComponent } from './client-types/client-type-list/client-type-list.component';
import { ClientTypeCreateComponent } from './client-types/client-type-create/client-type-create.component';
import { PropertyTypeListComponent } from './property-types/property-type-list/property-type-list.component';
import { PropertyTypeCreateComponent } from './property-types/property-type-create/property-type-create.component';
import { CustomerTypeListComponent } from './customer-types/customer-type-list/customer-type-list.component';
import { CustomerTypeCreateComponent } from './customer-types/customer-type-create/customer-type-create.component';
import { ClientPaymentsComponent } from './client-payments/client-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    UserProfileComponent,
    LogoutComponent,
    PropertyListComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    SidebarComponent,
    ClientListComponent,
    ClientCreateComponent,
    PropertyCreateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    LeaseCreateComponent,
    RealEstateAgentsListComponent,
    RealEstateAgentsCreateComponent,
    CustomerPaymentsComponent,
    LeaseListComponent,
    LeaseDetailComponent,
    PropertyDetailComponent,
    ClientDetailComponent,
    InvoiceDetailComponent,
    InvoiceListComponent,
    RegionListComponent,
    RegionCreateComponent,
    ClientTypeListComponent,
    ClientTypeCreateComponent,
    PropertyTypeListComponent,
    PropertyTypeCreateComponent,
    CustomerTypeListComponent,
    CustomerTypeCreateComponent,
    ClientPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    DashboardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
