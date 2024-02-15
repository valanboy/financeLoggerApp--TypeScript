import { HasFormatter } from "../interfaces/formatter";

export class Receipt implements HasFormatter{
    constructor(private customer:string, private details: string, private amount:number){
    }

    format(){
        return (`${this.customer} paid ₦${this.amount} for ${this.details}`)
    }
}