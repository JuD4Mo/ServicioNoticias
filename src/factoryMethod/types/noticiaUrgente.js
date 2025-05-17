import { Noticia } from './noticia.js';

export class NoticiaUrgente extends Noticia {
  constructor(info) {
    super(info);
    this.tipo = "urgente";
    this.descripcion = `[URGENTE] ${this.descripcion}`;
  }
}
