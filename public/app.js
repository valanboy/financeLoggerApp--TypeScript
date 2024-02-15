import { Invoice } from "./classes/invoice.js";
import { Receipt } from "./classes/receipt.js";
import { ListTemplate } from "./classes/listemplate.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
let Doc;
const ul = document.querySelector('ul');
const List = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value === 'invoice') {
        Doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        Doc = new Receipt(tofrom.value, details.value, amount.valueAsNumber);
    }
    List.render(Doc, type.value);
});
