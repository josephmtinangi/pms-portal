import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../_models/user.models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAccount().subscribe((res: any) => {
      this.user = res.data;
    })
  }

}
