import { Noticia } from './noticia.js';

export class NoticiaEvento extends Noticia {
  constructor(info) {
    super(info);
    this.tipo = "evento";
    this.descripcion = `[EVENTO] ${this.descripcion}`;
  }
}
