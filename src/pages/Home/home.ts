import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddHomeLoan } from '../AddHomeLoan/addhomeloan';
import { DataService } from '../../shared/data.service';
import { IHomeLoans } from '../../shared/interfaces';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

	v1: Array<number> = [];
	loans: Array<IHomeLoans> = [];
	isLoansAvailable: boolean = true;

  constructor(public navCtrl: NavController,
			  public dataService: DataService) {
    for(let i=0; i < 2; i++) {
		this.v1.push(i);
	}
	
	//this.loans = dataService.getSavedHomeLoans();
	this.isLoansAvailable = true; // this.loans.length === 0;
  }
  
  addHomeLoan() {
	this.navCtrl.push(AddHomeLoan);
  }

}
