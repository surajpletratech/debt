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
      AddPersonalLoan
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
      AddPersonalLoan
  ],
  providers: [APP_PROVIDERS]
})
export class AppModule {}
