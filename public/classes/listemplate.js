export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.textContent = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.textContent = item.format();
        li.append(p);
        //    let deletebtn = document.createElement('button')
        //    deletebtn.setAttribute ('class', "deletebtn")
        //    deletebtn.textContent = "delete"
        //    li.append(deletebtn)
        this.container.append(li);
    }
}
