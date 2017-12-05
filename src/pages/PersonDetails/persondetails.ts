import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditPersonalLoan } from './editpersonloan';

import { IPersonLoan } from '../../shared/interfaces';

@Component({
    selector: 'page-person-detail',
    templateUrl: 'persondetails.html'
})

export class PersonalLoanDetails {

    personLoanDetails: IPersonLoan = null;

    constructor(public navCtrl: NavController) {
        this.personLoanDetails = this.getPersonalLoanDetails();
    }

    getPersonalLoanDetails(): IPersonLoan {
        let loan: IPersonLoan = {
            key: 1,
            Name: 'NA',
            Address: 'NA',
            Amount: 50000,
            Rate: 7.50,
            Term: 7,
            StartDate: '1/1/2014',
            LenderName: 'NA',
            ScheduledPayment: 425,
            ScheduledNumberofPayment: 5 * 12,
            TotalInterest: 2400,
            TotalAmountPaid: 10000,
            TotalInterestPaid: 1200,
            APR: 0
        }

        return loan;
    }

    editPersonLoan() {
        this.navCtrl.push(EditPersonalLoan, { personalLoanData: this.personLoanDetails });
    }
}
