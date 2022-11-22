import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TOKEN_KEY } from 'src/app/auth/auth.service';
import { SessionService } from '../services/session/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private sessionService: SessionService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log(url);
        const isAuthenticated: boolean = this.sessionService.isLoggedIn();
        if (!isAuthenticated) {
            this.router.navigateByUrl('/auth');
        }
        return isAuthenticated;
    }
}