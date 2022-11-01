export class Post{
    private _text;

    constructor(texto: string){
        this._text = texto;
    }


    get texto(){
        return this._text
    }
}