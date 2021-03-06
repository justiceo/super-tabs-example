import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  open() {
    this.navParams.get('rootNavCtrl').push(ContactPage);
  }

}
