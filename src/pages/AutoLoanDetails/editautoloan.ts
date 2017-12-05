import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AutoLoanDetails } from './autoloandetails';
import { IAutoLoan } from '../../shared/interfaces';

@Component({
    selector: 'page-autoloan-edit',
    templateUrl: 'editautoloan.html'
})

export class EditAutoLoan {

    autoLoan: IAutoLoan = null;

    constructor(public navCtrl: NavController,
        public navParam: NavParams) {
        this.autoLoan = navParam.get("autoLoanData");
    }

    saveAutoLoan() {

    }
}
