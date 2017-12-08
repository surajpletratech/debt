import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddPersonalLoan } from '../AddPersonalLoan/AddPersonalLoan';
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class Personal {
   
    v1: Array<number> = [];
	
    constructor(public navCtrl: NavController) {
    for(let i=0; i< 2; i ++) {
		  this.v1.push(i);
	}
  }

  addPersonalLoan() {
	this.navCtrl.push(AddPersonalLoan);
  }
}
