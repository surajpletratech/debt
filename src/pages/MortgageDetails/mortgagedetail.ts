import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditMortgageDetails } from './editmortgage';

import { IHomeLoans } from '../../shared/interfaces';

@Component({
    selector: 'page-mortgage-detail',
    templateUrl: 'mortgagedetail.html'
})

export class MortgageDetails {

    homeLoan: IHomeLoans = null;
    
    constructor(public navCtrl: NavController) {
        this.homeLoan = this.getHomeLoanDetails();
    }

    getHomeLoanDetails(): IHomeLoans {
        let homeloan: IHomeLoans = {
            key: 1,
            Name: 'NA',
            Address: 'NA',
            Amount: 320000,
            Rate: 4.25,
            Term: 15,
            StartDate: '12/12/2012',
            LenderName: 'NA',
            ScheduledPayment: 1700,
            ScheduledNumberofPayment: 15 * 12,
            TotalInterest: 90000,
            TotalAmountPaid: 10000,
            TotalInterestPaid: 8000,
            APR: 0
        };

        return homeloan;
    }

    editHomeLoan() {
        this.navCtrl.push(EditMortgageDetails, { homeLoanData: this.homeLoan });
    }
}
