import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

import { IHomeLoans, IHomeLoanAmortization, IUser } from './interfaces';

@Injectable()
export class PouchDBService {
	
	private _homeloandb;
	private _amortizationdb;
	private _recentVisitedHomeLoandb;
	private _homeloans;
	private _amortization;
	private _recentVisitedHomeLoan;
	
	//private _favorites;
	
	constructor() {}
	
	initDB() {
		this._homeloandb = new PouchDB('HomeLoan', {adapter: 'websql'});
		this._amortizationdb = new PouchDB('Amortizations', {adapter: 'websql'});
		this._recentVisitedHomeLoandb = new PouchDB('RecentVisitedHomeLoans', {adapter: 'websql'});
	}
	
	resetDB() {
		this._homeloandb.destroy(function (err, response) {
			if (err) {
				return console.log(err);
			} else {
			console.log ('Database Deleted');
			}
		});
		
		this._amortizationdb.destroy(function (err, response) {
			if(err) {
				return console.log(err);
			} else {
				console.log('Database deleted');
			}
		});
		
		this._recentVisitedHomeLoandb.destroy(function (err, response) {
			if(err) {
				return console.log(err);
			} else {
				console.log('Database deleted');
			}
		});
	}
	
	addHomeLoans(type: IHomeLoans) {  
		return this._homeloandb.post(type);
	}   
	
	addRecentVisitedHomeLoans(type: IHomeLoans) {  
		return this._recentVisitedHomeLoandb.post(type);
	}
	
	addAmortization(type: IHomeLoanAmortization) {
		return this._amortizationdb.post(type);
	}
	
	updateHomeLoans(type: IHomeLoans) {  
		return this._homeloandb.put(type);
	}	
	
	updateRecentVisitedHomeLoans(type: IHomeLoans) {
		return this._recentVisitedHomeLoandb.put(type);
	}
	
	updateAmortization(type: IHomeLoanAmortization) {
		return this._amortizationdb.put(type);
	}
	
	deleteHomeLoans(type: IHomeLoans) {  
		return this._homeloandb.remove(type);
	}	
	
	deleteRecentVisitedHomeLoans(type: IHomeLoans) {
		return this._recentVisitedHomeLoandb.remove(type);
	}
	
	deleteAmortization(type: IHomeLoanAmortization) {
		return this._amortizationdb.remove(type);
	}
	

	private onDatabaseChange = (change) => {  
		var index = this.findIndex(this._homeloans, change.id);
		var type = this._homeloans[index];

		if (change.deleted) {
			if (type) {
				this._homeloans.splice(index, 1); // delete
			}
		} else {
			change.doc.Date = new Date(change.doc.Date);
			if (type && type._id === change.id) {
				this._homeloans[index] = change.doc; // update
			} else {
				this._homeloans.splice(index, 0, change.doc) // insert
			}
		}
	}

	// Binary search, the array is by default sorted by _id.
	private findIndex(array, id) {  
		var low = 0, high = array.length, mid;
		while (low < high) {
		mid = (low + high) >>> 1;
		array[mid]._id < id ? low = mid + 1 : high = mid
		}
		return low;
	}
	
	getAllAmortizations() {
		if(!this._amortization) {
			return this._amortizationdb.all({include_docs: true})
				.then(docs => {
					this._amortization = docs.rows.map(row => {
						return row.doc;
					})
				});
		} else {
			return Promise.resolve(this._amortization);
		}
	}
	
	getAllHomeLoans() {  
		if (!this._homeloans) {
			return this._homeloandb.allDocs({ include_docs: true})
				.then(docs => {
					this._homeloans = docs.rows.map(row => {
						// Dates are not automatically converted from a string.
						//row.doc.Date = new Date(row.doc.Date);
						return row.doc;
					});

					// Listen for changes on the database.
					this._homeloandb.changes({ live: true, since: 'now', include_docs: true})
						.on('change', this.onDatabaseChange);

					return this._homeloans;
				});
		} else {
			// Return cached data as a promise
			return Promise.resolve(this._homeloans);
		}
	}

	getAllRecentVisitedHomeLoans() {
		if(!this._recentVisitedHomeLoan) {
			return this._recentVisitedHomeLoandb.allDocs({include_docs: true})
					   .then(docs => {
							this._recentVisitedHomeLoan = docs.rows.map(row => {
								return row.doc;
							});
					   });
		} else {
			return Promise.resolve(this._recentVisitedHomeLoan);
		}
	}
}