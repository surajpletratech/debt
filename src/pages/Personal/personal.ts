import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddPersonalLoan } from '../AddPersonal/AddPersonalLoan';
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class Personal {

  constructor(public navCtrl: NavController) {
    
  }


  addPersonalLoan() {
      this.navCtrl.push(AddPersonalLoan);
  }
}
