import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:8000/api';
  TOKEN_KEY = 'auth_token';
  AUTHENTICATED_USER_KEY = 'current_user';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getAuthenticatedUser(){
    return localStorage.getItem(this.AUTHENTICATED_USER_KEY);
  }

  isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.AUTHENTICATED_USER_KEY)
    this.router.navigateByUrl('/login');
  }

  login(email: string, password: string){
    const payload = {
      email: email,
      password: password
    };

    this.httpClient.post(this.API_URL + '/auth/login', payload).subscribe((res: any) => {
      localStorage.setItem(this.TOKEN_KEY, res.token);
      localStorage.setItem(this.AUTHENTICATED_USER_KEY, JSON.stringify(res.user));
      this.router.navigateByUrl('/');
    });
  }

  getAccount(){
    return this.httpClient.get(this.API_URL + '/auth/user');
  }

}
