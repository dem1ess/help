import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service'


@Injectable()
export class IsLoggedIn implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

canActivate() {
  if (this.authService.isLoggedIn()) {
    return true
  }else {
    this.router.navigate(['reg'])
    return false
  }
}
}
