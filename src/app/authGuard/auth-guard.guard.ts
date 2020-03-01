import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const userName = localStorage.getItem('userData');
    console.log( 'local data' , userName);
    if (userName) {
      this.router.navigate(['/dashbord']);
      // return false;
    } else {
      // alert("u r not a valid user")
      return true;
     // this.router.navigate(["/login"]);
    }
  }

}
