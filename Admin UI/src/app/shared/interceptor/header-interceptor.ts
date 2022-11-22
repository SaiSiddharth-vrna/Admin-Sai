import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session/session.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private sessionService: SessionService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: any = this.sessionService.getCurrentToken();
        const macId: any = this.sessionService.getUniqueId();
        const user: any = this.sessionService.getUsername();
        const isLoggedIn = (token === null || token === undefined) ? false : true;
        
        if (isLoggedIn && !request.headers.get("skip")) {
            const headers = {
                'Content-Type': 'application/json',
                userName: user,
                macAddress: macId,
                Authorization: token,
                country: 'IN'
            };
            request = request.clone({
                setHeaders: headers
            });
        } else if (request.headers.get("skip")) {
            const headers = {
                'Content-Type': 'image/jpeg'
            };
            request = request.clone({
                setHeaders: headers
            });
        }
        return next.handle(request);

    }
}