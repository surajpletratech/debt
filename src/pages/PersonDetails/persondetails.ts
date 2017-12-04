import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditPersonalLoan } from './editpersonloan';

@Component({
    selector: 'page-person-detail',
    templateUrl: 'persondetails.html'
})

export class PersonalLoanDetails {
    constructor(public navCtrl: NavController) {

    }

    editPersonLoan() {
        this.navCtrl.push(EditPersonalLoan);
    }
}
