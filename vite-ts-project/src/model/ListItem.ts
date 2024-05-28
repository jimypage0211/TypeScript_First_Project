export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    private _id:string;
    private _item:string ;
    private _checked: boolean = false;

    constructor(id: string, item: string, checked: boolean = false){
        this._id = id;
        this._item = item;
        this._checked = checked;
    }

    public get id(): string {
        return this._id;
    } 
    public get item(): string {
        return this._item;
    } 
    public get checked(): boolean {
        return this._checked;
    } 

    public set id (id:string){
        this._id = id;
    }
    public set item (item:string){
        this._item = item;
    }
    public set checked (checked:boolean){
        this._checked = checked;
    }

}