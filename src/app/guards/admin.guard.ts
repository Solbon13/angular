import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { AUTH } from '../routing/const';
import { AuthService } from '../store/general-store/auth-store/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAdmin();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAdmin();
  }

  private getIsAdmin(): Observable<boolean> {
    return this.authService.isAdmin$.pipe(
      first(),
      map(isAdmin => {
        if (!isAdmin) {
          this.router.navigateByUrl(AUTH)
        }
        return isAdmin
      })
    )
  }

}
