export class Receipt {
    constructor(customer, details, amount) {
        this.customer = customer;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return (`${this.customer} paid ₦${this.amount} for ${this.details}`);
    }
}
