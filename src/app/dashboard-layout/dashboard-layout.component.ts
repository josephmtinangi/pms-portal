import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.models';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  user: User;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser():void {
    this.user = JSON.parse(this.authService.getAuthenticatedUser());
  }

}
