import { NoticiaNormal } from "./types/noticiaNormal.js";
import { NoticiaUrgente } from "./types/noticiaUrgente.js";
import { NoticiaEvento } from "./types/noticiaEvento.js";

export class NoticiaFactory {
  static crear(info) {
    switch (info.tipo) {
      case "urgente":
        return new NoticiaUrgente(info);
      case "evento":
        return new NoticiaEvento(info);
      default:
        return new NoticiaNormal(info);
    }
  }
}
