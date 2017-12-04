import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditAutoLoan } from './editautoloan';

@Component({
    selector: 'page-autoloan-detail',
    templateUrl: 'autoloandetails.html'
})

export class AutoLoanDetails {
    constructor(public navCtrl: NavController) {

    }

    editAutoLoan() {
        this.navCtrl.push(EditAutoLoan);
    }
}
