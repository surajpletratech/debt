import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Mortgage } from '../pages/mortgage/mortgage';
import { Personal } from '../pages/personal/personal';
import { CreditCard } from '../pages/creditcard/creditcard';
import { Auto } from '../pages/auto/auto';
import { Settings } from '../pages/settings/settings';
import { AddHomeLoan } from '../pages/AddHomeLoan/addhomeloan';
import { Amortization } from '../pages/Amortization/amortization';
import { DataService } from '../shared/data.service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
			  public dataService: DataService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Mortgage', component: Mortgage },
	  { title: 'Auto', component: Auto },
	  { title: 'Personal', component: Personal },
	  { title: 'Credit Card', component: CreditCard },
	  { title: 'Settings', component: Settings },
	  { title: 'AddHomeLoan', component: AddHomeLoan },
	  { title: 'Amortization', component: Amortization },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
	  
	  this.dataService.initalizeData();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
