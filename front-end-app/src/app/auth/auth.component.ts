import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: string
  password: string


  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  userLoginClick() {
    const user = {
      login: this.login,
      password: this.password
    }

    if (user.password == undefined) {
      this.flashMessages.show("Введіть пароль", {
        cssClass: 'alert-danger',
        timeout: 2000
      });
      return false
    }
    this.authService.authUser(user).subscribe(data => {
      if (!data.success) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      }else {
        this.flashMessages.show("Ви успішно авторизувались", {
          cssClass: 'alert-success',
          timeout: 2000
        });
        this.router.navigate(['/dashboard'])
        this.authService.storeUser(data.token, data.user)
      }
    })
  }

}
