import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { IHomeLoanAmortization } from '../../shared/interfaces';

@Component({
  selector: 'page-editamortization',
  templateUrl: 'editamortization.html'
})
export class EditAmortization implements OnInit {

	amortizations: Array<IHomeLoanAmortization> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ngOnInit() {
	this.amortizations = this.navParams.get('amortizationdate');
	
	
	//this.calculateAmortization();
	
  }
  
  /*calculateAmortization() {
	let balance: number = 0;
	let endbalance: number = 0;
	let interest: number = 0;
	let cummulativeInterest: number = 0;
	let cummulativePrincipal: number = 0;
	let principle: number = 0;
		
	for(let i=1; i<= this.homeLoanData.ScheduledNumberofPayment; i++) {
		let pdate = new Date(this.homeLoanData.StartDate);	
		pdate.setMonth(pdate.getMonth() + i - 1);
		
		if (i === 1) {
			balance = this.homeLoanData.Amount; 
		}
		else {
			balance = endbalance;
		}
		
		interest = balance * this.homeLoanData.Rate / 12 / 100;
		principle = this.homeLoanData.ScheduledPayment - interest;
		
		cummulativeInterest += interest;
		cummulativePrincipal += this.homeLoanData.ScheduledPayment - interest;
		endbalance = balance - principle ;
		
		let homeloanamortization: IHomeLoanAmortization = {
			key: i,
			PaymentNumber: i,
			PaymentDate: pdate.toString(),
			BeginningBalance: balance,
			ScheduledPayment: this.homeLoanData.ScheduledPayment,
			ExtraPayment: 0,
			TotalPayment: this.homeLoanData.totalPayment,
			Principal: cummulativePrincipal,
			Interest: interest,
			EndingBalance: endbalance,
			CumulativeInterest: cummulativeInterest,
			ActualPaymentdate: '1'
		};
		
		this.amortizations.push(homeloanamortization);
	}
  }
  
  editAmoritzation() {
	this.navCtrl.push(EditAmortization, {amortizationdate: amortizations});
  }*/

}
