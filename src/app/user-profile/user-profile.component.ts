import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../_models/user.models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      first_name: [''],
      middle_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      old_password: [''],
      password: [''],
      password_confirmation: ['']
    });
   }

  ngOnInit() {
    this.authService.getAccount().subscribe((res: any) => {
      this.user = res.data;
    })
  }

  update(): void {

  }

}
