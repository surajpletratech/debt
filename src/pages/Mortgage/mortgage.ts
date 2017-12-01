import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddHomeLoan } from '../AddHomeLoan/addhomeloan';



@Component({
  selector: 'page-mortgage',
  templateUrl: 'mortgage.html'
})
export class Mortgage {

	v1: Array<number> = [];

  constructor(public navCtrl: NavController) {
    for(let i=0; i< 6; i ++) {
		this.v1.push(i);
	}
  }
  
  addHomeLoan() {
	this.navCtrl.push(AddHomeLoan);
  }

}
