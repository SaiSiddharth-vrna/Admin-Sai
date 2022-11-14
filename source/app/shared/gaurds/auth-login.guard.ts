import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { SessionService } from '../services/session/session.service';

@Injectable()
export class AuthLoginGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let url: string = state.url;
    console.log(url);
    const isAuthenticated = await this.sessionService.isLoggedIn();
    if (isAuthenticated) {
      this.router.navigateByUrl('/');
    }
    return !isAuthenticated;
  }
}
