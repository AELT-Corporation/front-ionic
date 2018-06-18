import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HttpRequestsProvider } from './../../providers/http-request';
import { API_SUB_URL } from '../../providers/constants';
 
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
    private loadingCtrl: LoadingController,
    private httpRequest: HttpRequestsProvider,
  ) { }
  
  public login() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
    // this.nav.setRoot('DashboardPage');

    const data = this.registerCredentials;

    this.httpRequest.postRequest(API_SUB_URL.URL_LOGIN, data, 'json').then((res) => {
      console.log(res);
      
    }).catch(() => this.loading.dismiss());
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }
}
