import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { TOKEN_KEY, AuthService } from '../../auth/auth.service';
import { ToastService } from '../services/toast/toast.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private toast: ToastService,
        private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let token: any | null = null;
        return next.handle(request)
            .pipe(
                tap((res: any) => {
                    token = res.headers?.get('vrna-token');
                    if (token) {
                        console.log(token);
                        const oldToken: any = localStorage.getItem(TOKEN_KEY);
                        if (oldToken !== token) {
                            localStorage.setItem(TOKEN_KEY, token);
                        }
                    }
                }),
                map(res => {
                    console.log("Passed through the interceptor in response");
                    console.log(res);
                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    console.log(error);
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                        console.log('This is client side error');
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        this.toast.show('error', 'Failed', error.statusText);
                        if (error.status === 401 || error.status === 454) {
                            this.authService.logout();
                        }
                        console.log('This is server side error');
                        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    }
                    console.log(errorMsg);
                    return throwError(errorMsg);
                })
            )
    }
}