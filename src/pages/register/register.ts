import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerCredentials = { firstName: '' ,email: '', password: '' };

  constructor(
    private nav: NavController,
    private loadingCtrl: LoadingController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  public register() {
    
    const load = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });

    load.present();

    this.nav.setRoot('DashboardPage');
   
  }

  logOut(){
    this.nav.pop();
  }
}