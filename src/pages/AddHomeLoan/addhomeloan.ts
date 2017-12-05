import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IHomeLoans } from '../../shared/interfaces';
import { Amortization } from '../Amortization/amortization';

@Component({
  selector: 'page-addhomeloan',
  templateUrl: 'addhomeloan.html'
})
export class AddHomeLoan {

  slideOneForm: FormGroup;
  monthlyPayment: number = -1;
  totalInterest: number = -1;
  totalPayment: number = 0;
  formSubmitted: boolean = false;
  
  myData: any = null;
  
  homeloan: IHomeLoans = null;

  constructor(public navCtrl: NavController,
			  public formBuilder: FormBuilder	) {
     this.slideOneForm = formBuilder.group({
        loanAmount: ['300000', Validators.required],
        rate: ['4.5', Validators.required],
        term: ['30', Validators.required],
		startDate: ['', Validators.required]
    });
  }
  
  Calculate() {
	  this.myData = this.slideOneForm.value;
	  if (this.myData.startDate.length === 0) {
		  this.myData.startDate = new Date();
	  }
	  //this.monthlyPayment = 100000 * ( ( ((4.5 * 0.01)/12) *  Math.pow( 1 + ((4.5 * 0.01)/12), 360 ))  / ( Math.pow(1 + ((4.5 * 0.01)/12), 360 )  ))
	  let mp = ((((this.myData.rate * 0.01) / 12) / (1 - (Math.pow((1 + ((this.myData.rate * 0.01) / 12)), -(this.myData.term * 12))))) * this.myData.loanAmount);
	  this.monthlyPayment = Math.round(mp)
	  this.totalPayment = mp * this.myData.term * 12;
	  this.totalInterest = this.totalPayment - this.myData.loanAmount;
  }
  
  prepareObject() : IHomeLoans {
	  let self = this;
	  self.Calculate();
	
	  let homeloan: IHomeLoans = {
		  key: 1 ,
		  Name:'NA' ,
		  Address:'NA' ,
		  Amount:this.myData.loanAmount ,
		  Rate:this.myData.rate ,
		  Term:this.myData.term ,
		  StartDate:this.myData.startDate,
		  LenderName: 'NA',
		  ScheduledPayment:this.monthlyPayment,
		  ScheduledNumberofPayment:this.myData.term * 12,
		  TotalInterest:this.totalInterest,
		  TotalAmountPaid:this.totalPayment,
		  TotalInterestPaid:this.totalInterest,
		  APR: 0
	  };
	
	  return homeloan;
  }
  
  CalculateAmortization() {
	  let homeloan = this.prepareObject();
	
	  //this.navCtrl.push(Amortization, {homeLoankey: 1});
	  this.navCtrl.push(Amortization, {homeLoanData: homeloan});
  }
  
  saveHomeLoan() {
	  let homeloan = this.prepareObject();
  }

}
