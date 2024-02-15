import { HasFormatter } from "./interfaces/formatter.js"
import { Invoice } from "./classes/invoice.js";
import { Receipt } from "./classes/receipt.js";
import { ListTemplate } from "./classes/listemplate.js";

const form = document.querySelector('.new-item-form')as HTMLFormElement
const type = document.querySelector('#type')as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

let Doc: HasFormatter ;
const ul = document.querySelector('ul')!
const List = new ListTemplate(ul)

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
   
    if(type.value === 'invoice'){
        Doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else{
        Doc = new Receipt(tofrom.value, details.value, amount.valueAsNumber)
    }

    List.render(Doc, type.value);

})