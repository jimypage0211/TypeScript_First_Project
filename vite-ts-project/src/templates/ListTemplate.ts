 import FullList from "../model/FullList";


 interface DOMList  {
    ul: HTMLUListElement;
    clear(): void;
    render(fullList: FullList): void,
 }

 export default class ListTemplate implements DOMList{
    ul: HTMLUListElement;
    static instance: ListTemplate = new ListTemplate();

    private constructor(){
        this.ul = document.querySelector("#listItems") as HTMLUListElement;
    } 

    public clear(): void {
        this.ul.innerHTML = ""
    }

    public render(fullList: FullList): void {
        this.clear();
        const ul = document.createElement("ul") as HTMLUListElement;

        fullList.list.forEach(element => {
            //Creating the li element
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";
            //Creating inpunt checkbox of each element
            const input = document.createElement("input") as HTMLInputElement;
            input.id = element.id;
            input.type = "checkbox";
            input.checked = element.checked;
            //Creating label element
            const label = document.createElement("label") as HTMLLabelElement;
            label.innerText = element.item;
            label.htmlFor = element.id;
            //Creating button element
            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "button";
            button.innerText = "X";
            //Ading event for checking and unchecking each li
            input.addEventListener('change', ()=>{
                element.checked = !element.checked;
            })
            button.addEventListener('click', ()=>{
                fullList.removeItem(element.id)
                this.render(fullList);
            })
            //Apending 
            li.append(input)
            li.append(label)
            li.append(button)
            ul.append(li)
        });
    }
 }