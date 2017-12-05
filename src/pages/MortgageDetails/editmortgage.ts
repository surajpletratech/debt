import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { IHomeLoans } from '../../shared/interfaces';

@Component({
    selector: 'page-mortgage-edit',
    templateUrl: 'editmortgage.html'
})

export class EditMortgageDetails {

    homeLoans: IHomeLoans = null;
    constructor(public navCtrl: NavController,
        public navParams: NavParams) {
        this.homeLoans = navParams.get("homeLoanData");
    }

    saveHomeLoan() {

    }
}
