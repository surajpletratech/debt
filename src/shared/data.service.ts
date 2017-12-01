import {Injectable } from '@angular/core';
import {IHomeLoans, IHomeLoanAmortization} from './interfaces';
//import { ItemService } from './item.service';
//import {SqliteService} from './sqlite.service';
import { PouchDBService } from './puchdb.service';

@Injectable()
export class DataService {
	
	public savedHomeLoans: Array<IHomeLoans> = [];
	public recentHomeLoans: Array<IHomeLoans> = [];
	public myAmortization: Array<IHomeLoanAmortization> = [];
	



	constructor( public pouchdbService: PouchDBService
				) {
		
	}
	
    initalizeData() {
		this.pouchdbService.initDB();
		
		//this.loadStoreData();
		//this.loadPaymentType();
		//this.loadFavStoreData();
		//this.loadMyStoreData();
		//this.loadmypaymentType();
		//this.loadRewards();
		//this.getPaymentTypeKeys();
		
		// SQLITE get;
		//this.loadMyPaymentTypeSQLITE();
		//this.loadMyPaymentTypePouch();
		//this.loadFaoriteStoresPouch();
	}
	
	isLoanExists(key: number) : boolean {
		let self = this;
		let returnVal: boolean = false;
		
		for(let j = 0, len=self.savedHomeLoans.length; j < len; j++) {
			if (self.savedHomeLoans[j].key === key) {
				returnVal = true;
				return returnVal;
			}
		}
		
		return returnVal;
	}
	
	addHomeLoan(loan : IHomeLoans) : Array<IHomeLoans> {
		let self = this;
		
		if (self.savedHomeLoans.length === 0){
			self.loadSavedHomeLoans();
		}
		
		if(self.isLoanExists(loan.key) === false) {
			self.pouchdbService.addHomeLoans(loan);
		}
		else {
			self.pouchdbService.updateHomeLoans(loan);
		}
		
		self.loadSavedHomeLoans();
		
		return self.savedHomeLoans;
	}
	
	addRecentVisitedHomeLoan(loan : IHomeLoans) : Array<IHomeLoans> {
		let self = this;
		
		if (self.recentHomeLoans.length === 0){
			self.loadRecentVisitedHomeLoans();
		}
		
		self.pouchdbService.addRecentVisitedHomeLoans(loan);
		
		self.loadRecentVisitedHomeLoans();
		
		return self.recentHomeLoans;
	}
	
	deleteRecentVisitedHomeLoad(loan: IHomeLoans) : Array<IHomeLoans> {
		let self = this;
		
		this.pouchdbService.updateRecentVisitedHomeLoans(loan);
		
		self.loadRecentVisitedHomeLoans();
		
		return self.recentHomeLoans;
	}
	
	loadSavedHomeLoans() {
		let self = this;
		
		self.savedHomeLoans = [];
		
		self.pouchdbService.getAllHomeLoans()
			.then((data) => {
				self.savedHomeLoans = data;
			}, (err) => {
				console.log('Error in load save home loans : ' + err)
			});
	}
	
	loadRecentVisitedHomeLoans() {
		var self = this;
		
		self.recentHomeLoans = [];
		
		self.pouchdbService.getAllRecentVisitedHomeLoans()
			.then((data) => {
				self.recentHomeLoans = data;
			}, (err) => {
				console.log('Error in load recent visited home loans: ' + err)
			});
	}
	
	loadHomeLoanAmortization() {
		var self = this;
		
		self.myAmortization = [];
		
		self.pouchdbService.getAllAmortizations()
		    .then((data) => {
				self.myAmortization = data;
			}, (err) => {
				console.log('Error in loan amortization : ' + err)
			});
	}
	
	getSavedHomeLoans(): Array<IHomeLoans> {
		let self = this;
		
		if (self.savedHomeLoans.length === 0){
			self.loadSavedHomeLoans();
		}
		
		return self.savedHomeLoans;
	}
	
	getRecentVisitedHomeLoans(): Array<IHomeLoans> {
		let self = this;
		
		if(self.recentHomeLoans.length === 0) {
			self.loadRecentVisitedHomeLoans();
		}
		
		return self.recentHomeLoans;
	}
	
	getAmortization(key: number) : Array<IHomeLoanAmortization> {
		let self = this;
		if(self.myAmortization.length === 0) {
			self.loadHomeLoanAmortization();
		}
		return self.myAmortization;
	}
}