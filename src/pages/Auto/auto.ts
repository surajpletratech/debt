import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddAutoLoan } from '../AddAutoLoan/AddAutoLoan';

@Component({
  selector: 'page-auto',
  templateUrl: 'auto.html'
})
export class Auto {

  constructor(public navCtrl: NavController) {
    
  }

  addAutoLoan() {
      
      this.navCtrl.push(AddAutoLoan);
  }

}
