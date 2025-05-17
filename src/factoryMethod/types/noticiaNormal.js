import { Noticia } from "./noticia.js";

export class NoticiaNormal extends Noticia {
  constructor(info) {
    super(info);
    this.tipo = "normal";
  }
}
