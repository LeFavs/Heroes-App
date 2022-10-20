import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verifyAuth()
      .pipe(
        tap(isAuth => {
          if (!isAuth) {
            console.log("Identifíquese joven");
            this.router.navigate(['./auth/login']);
          }
        })
      );

    // if(this.authService.auth.id){
    //   console.log("Guardia dice: Buen día jefecito!");
    //   return true;
    // }
    // console.log("Guardia dice: Nel pastel!-CanActivate");
    // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verifyAuth()
      .pipe(
        tap(isAuth => {
          if (!isAuth) {
            console.log("Identifíquese joven");
            this.router.navigate(['./auth/login']);
          }
        })
      );

    // if(this.authService.auth.id){
    //   console.log("Guardia dice: Pásele jefe!");
    //   return true;
    // }
    // console.log("Guardia dice: Pelas wey! -CanLoad");
    // return false;
  }
}
