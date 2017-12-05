import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditAutoLoan } from './editautoloan';

import { IAutoLoan } from '../../shared/interfaces';

@Component({
    selector: 'page-autoloan-detail',
    templateUrl: 'autoloandetails.html'
})

export class AutoLoanDetails {

    autoLoan: IAutoLoan = null;

    constructor(public navCtrl: NavController) {
        this.autoLoan = this.getAutoLoan();
    }

    getAutoLoan(): IAutoLoan {
        let autoloan: IAutoLoan = {
            key: 1,
            Name: 'NA',
            Address: 'NA',
            Amount: 22000,
            Rate: 4.25,
            Term: 5,
            StartDate: '1/1/2014',
            LenderName: 'NA',
            ScheduledPayment: 425,
            ScheduledNumberofPayment: 5 * 12,
            TotalInterest: 2400,
            TotalAmountPaid: 10000,
            TotalInterestPaid: 1200,
            APR: 0
        };

        return autoloan;
    }

    editAutoLoan() {
        this.navCtrl.push(EditAutoLoan, { autoLoanData: this.autoLoan });
    }
}
