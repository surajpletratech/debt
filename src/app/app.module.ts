import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Mortgage } from '../pages/mortgage/mortgage';
import { Personal } from '../pages/personal/personal';
import { CreditCard } from '../pages/creditcard/creditcard';
import { Auto } from '../pages/auto/auto';
import { Settings } from '../pages/settings/settings';
import { AddHomeLoan } from '../pages/AddHomeLoan/addhomeloan';
import { Amortization } from '../pages/Amortization/amortization';
import { EditAmortization } from '../pages/EditAmortization/editamortization';
import { AddAutoLoan } from '../pages/AddAutoLoan/AddAutoLoan';
import { AddPersonalLoan } from '../pages/AddPersonal/AddPersonalLoan';
import { AutoLoanDetails } from '../pages/autoloandetails/autoloandetails';
import { PersonalLoanDetails } from '../pages/persondetails/persondetails';
import { MortgageDetails } from '../pages/mortgagedetails/mortgagedetail';
import { EditMortgageDetails } from '../pages/mortgagedetails/editmortgage';
import { EditPersonalLoan } from '../pages/persondetails/editpersonloan';
import { EditAutoLoan } from '../pages/autoloandetails/editautoloan';


import {APP_PROVIDERS} from './app.providers'

@NgModule({
  declarations: [
    MyApp,
    Home,
    Mortgage,
	Personal,
	Auto,
	CreditCard,
	Settings,
	AddHomeLoan,
	Amortization,
      EditAmortization,
      AddAutoLoan,
      AddPersonalLoan, AutoLoanDetails, PersonalLoanDetails, MortgageDetails, EditPersonalLoan, EditAutoLoan, EditMortgageDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Mortgage,
	Personal,
	Auto,
	CreditCard,
	Settings,
	AddHomeLoan,
	Amortization,
      EditAmortization,
      AddAutoLoan,
      AddPersonalLoan, AutoLoanDetails, PersonalLoanDetails, MortgageDetails, EditPersonalLoan, EditAutoLoan, EditMortgageDetails
  ],
  providers: [APP_PROVIDERS]
})
export class AppModule {}
