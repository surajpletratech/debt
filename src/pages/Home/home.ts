import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//import { AddHomeLoan } from '../AddHomeLoan/addhomeloan';
import { DataService } from '../../shared/data.service';
import { IHomeLoans } from '../../shared/interfaces';

import { MortgageDetails } from '../mortgagedetails/mortgagedetail';
import { AutoLoanDetails } from '../autoloandetails/autoloandetails';
import { PersonalLoanDetails } from '../persondetails/persondetails';

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
  
  debtItemClick(item) {
      if (item === "home")
          this.navCtrl.push(MortgageDetails);
      else if (item == "auto")
          this.navCtrl.push(AutoLoanDetails);
      else
          this.navCtrl.push(PersonalLoanDetails);
  }
}
