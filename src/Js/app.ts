import { PostController } from "./controllers/post-controller.js";

const controller = new PostController();

const buttonTwittar = document.getElementById('buttonTwittar');

export function error404 (){
    return window.location.href = '/src/pages/error.html'
}