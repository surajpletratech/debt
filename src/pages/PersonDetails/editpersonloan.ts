import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { IPersonLoan } from '../../shared/interfaces';

@Component({
    selector: 'page-person-edit',
    templateUrl: 'editpersonloan.html'
})

export class EditPersonalLoan {

    personLoanDetails: IPersonLoan = null;

    constructor(public navCtrl: NavController, public navParam: NavParams) {
        this.personLoanDetails = navParam.get("personalLoanData");
    }

    savePersonLoan() {

    }
}
