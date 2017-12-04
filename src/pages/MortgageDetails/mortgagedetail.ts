import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditMortgageDetails } from './editmortgage';

@Component({
    selector: 'page-mortgage-detail',
    templateUrl: 'mortgagedetail.html'
})

export class MortgageDetails {
    constructor(public navCtrl: NavController) {

    }

    editHomeLoan() {
        this.navCtrl.push(EditMortgageDetails);
    }
}
