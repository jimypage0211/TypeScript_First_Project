import ListItem from "./ListItem";

interface List {
    list: ListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj:ListItem): void;
    removeItem(id:string): void,  
}

export default class FullList implements List{
    //This is done since we will only work with one instance of the list
    static instance: FullList = new FullList() 
    
    constructor(private _list: ListItem[] = []){}

    public get list (): ListItem[] {
        return this._list;
    }

    public load(): void{
        const storedList: string | null = localStorage.getItem("myList");
        if (typeof storedList != "string") return;

        const parsedList : {_id:string, _item:string, _checked: boolean}[] = JSON.parse(storedList);
        
        parsedList.forEach((listItem)=>{
            const newItem = new ListItem (listItem._id, listItem._item, listItem._checked);
            FullList.instance.addItem(newItem); 
        })
    }

    public save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    public clearList(): void {
        this._list = [];
        this.save();
    }

    public  addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    public removeItem(id: string): void {
        const newList: ListItem[] = [];
        this._list.forEach((element:ListItem) => {
            if (element.id != id){
                newList.push(element);
            }
        })
        this._list = newList;
        this.save();
    }
}
