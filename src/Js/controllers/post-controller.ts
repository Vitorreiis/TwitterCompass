export class PostController{
    private inputTexto;

    constructor(){
        this.inputTexto = document.getElementById('textInput');
    }

    adiciona(){
        console.log(this.inputTexto);
    }
}