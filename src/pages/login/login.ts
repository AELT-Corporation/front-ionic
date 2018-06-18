import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(
    private nav: NavController, 
    private loadingCtrl: LoadingController
  ) { }
  
  public login() {
    this.nav.setRoot('DashboardPage');
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }
}
