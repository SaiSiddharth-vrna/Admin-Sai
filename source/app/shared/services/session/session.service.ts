import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { delay, tap } from 'rxjs/operators';
import { MAC_KEY, USERNAME_KEY, TOKEN_KEY, USER_KEY } from 'src/app/auth/auth.service';

@Injectable()
export class SessionService {

    redirectUrl: string;

    constructor(private router: Router) { }

    isLoggedIn(): boolean {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token && token !== undefined && token !== null) {
            return true;
        } else {
            return false;
        }
    }

    getUniqueId() {
        const uId = localStorage.getItem(MAC_KEY);
        return uId;
    }

    getUsername() {
        const name = localStorage.getItem(USERNAME_KEY);
        return name;
    }

    getUserId():number {
        const id = Number(localStorage.getItem(USER_KEY));
        return id;
    }

    getCurrentToken(): any {
        const userToken: any = localStorage.getItem(TOKEN_KEY);
        return userToken;
    }
}