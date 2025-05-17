export class Noticia {
    constructor({ titulo, descripcion, link, autor }) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.link = link || "No existe una dirección a la noticia extendida";
      this.fecha = new Date().toISOString().split("T")[0];
      this.autor = autor;
      this.tipo = "normal";
    }
  
    toObject() {
      return {
        titulo: this.titulo,
        descripcion: this.descripcion,
        link: this.link,
        fecha: this.fecha,
        autor: this.autor,
        tipo: this.tipo
      };
    }
  }
  