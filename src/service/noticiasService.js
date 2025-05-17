import { supabase } from "../db/supaClient.js";
import { NoticiaFactory } from "../factoryMethod/noticiasFactory.js";

export const crearNoticia = async(info) => {
    const noticia = NoticiaFactory.crear(info)
    return await supabase.from('noticias').insert([noticia.toObject()]).select('*');
}

export const getNoticias = async() => {
    return await supabase.from('noticias').select('*');
}   

export const editarNoticia = async(info, noticiaId) => {
    const camposActualiar = {};
    if(info.titulo) camposActualiar.titulo = info.titulo;
    if(info.descripcion) camposActualiar.descripcion = info.descripcion;
    if(info.link) camposActualiar.link = info.link;
    if(info.fecha) throw new Error("No es posible actualizar la fecha de la noticia");
    if(info.autor) camposActualiar.autor = info.autor;

    if(Object.keys(camposActualiar).length == 0){
        throw new Error("No se enviaron campos para actualizar")
    }
    return await supabase.from('noticias').update(camposActualiar).eq('idnoticia', Number(noticiaId)).select('*');
}

export const eliminarNoticia = async(noticiaId) =>{
    return await supabase.from('noticias').delete('*').eq('idnoticia', noticiaId);
}

