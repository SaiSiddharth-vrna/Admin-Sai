import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { environment } from 'src/environments/environment';
export const USER_KEY = 'userId';
export const USERNAME_KEY = 'username';
export const TOKEN_KEY = 'token';
export const MAC_KEY = 'macId';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = '/auth-service/user/';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  authenticate(data: any) {
    const headers = {
      'Content-Type': 'application/json',
      userName: data.email,
      macAddress: data.macAddress,
    };
    let token: any | null = null;
    const url = this.baseUrl + `validate`;
    return this.http.post(url, data, {
      observe: 'response',
      headers: headers
    }).pipe(
      tap((res: any) => {
        token = res.headers.get('vrna-token');
      }),
      map((res: any) => {
        res.body['token'] = token;
        return res.body;
      })
    );
  }

  // #Unique ID Creation
  uniqueID() {
    const uniqueId = uuidv4();
    return uniqueId;
  }

  // #After Successfull login
  afterLogin(userData: any, macId: any, token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USERNAME_KEY, userData.email);
    localStorage.setItem(MAC_KEY, macId);
    localStorage.setItem(USER_KEY, JSON.stringify(userData.userId));
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(MAC_KEY);
    localStorage.removeItem(USER_KEY);
    this.router.navigate(['/auth']);
  }

}
