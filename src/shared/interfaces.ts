export interface ILoans {
    key: number;
    Name: string;
    Address: string;
    Amount: number;
    Rate: number;
    Term: number;
    StartDate: string;
    LenderName: string;
    ScheduledPayment: number;
    ScheduledNumberofPayment: number;
    TotalInterest: number;
    TotalAmountPaid: number;
    TotalInterestPaid: number;
    APR: number;
}

export interface IHomeLoans extends ILoans {

}

export interface IPersonLoan extends ILoans {

}

export interface IAutoLoan extends ILoans {

}

export interface IHomeLoanAmortization {
	key: number;
	PaymentNumber: number;
	PaymentDate: string;
	BeginningBalance: number;
	ScheduledPayment: number;
	ExtraPayment: number;
	TotalPayment: number;
	Principal: number;
	Interest: number;
	EndingBalance: number;
	CumulativeInterest: number;
	ActualPaymentdate: string;
	IsPaid: boolean;
}

export interface ICreditCard {
	key: string;
	LenderName: string;
	Amount: number;
	PromotionalRate: number;
	PromotionEndDate: string;
	InterestRate: number;
}

export interface ICreditCardPayment {
	key: string;
	PaymentNumber: number;
	PaymentDate: string;
	BeginningBalance: Number;
	ScheduledPayment: number;
	TotalPayment: number;
	Interest: number;
}

export interface IUser {
	uid: string;
	username: string;
	email: string;
	country: string;
	name: string;
}

export interface Predicate<T>{
	(item: T): boolean;
}

export interface ValidationResult {
	[key: string]: boolean;
}
