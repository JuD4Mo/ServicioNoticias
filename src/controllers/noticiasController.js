import * as noticiasService from "../service/noticiasService.js";

export const crearNoticia = async (req, res) => {
  try {
    const { data, error } = await noticiasService.crearNoticia(req.body);
    if (error) return res.status(400).json(error);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNoticias = async (req, res) => {
  try {
    const { data, error } = await noticiasService.getNoticias();
    if (error) return res.status(400).json(error);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const editarNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await noticiasService.editarNoticia(req.body, id);
    if (error) return res.status(400).json(error);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNoticiaById = async (req, res) => {
  try {
    const { id } = req.params;
    const idNoticia = parseInt(id?.trim?.());

    if (isNaN(idNoticia)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const { data, error } = await noticiasService.getNoticiaById(idNoticia);

    if (error) {
      console.error("❌ Error de Supabase:", error);
      return res.status(500).json({ message: "Error al obtener la noticia", error });
    }

    if (!data) {
      console.warn("⚠️ No se encontró noticia con ID:", idNoticia);
      return res.status(404).json({ message: `Noticia no encontrada con ID ${idNoticia}` });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("💥 Error inesperado:", err);
    return res.status(500).json({ message: "Error inesperado", error: err.message });
  }
};

export const eliminarNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await noticiasService.eliminarNoticia(id);
    if (error) return res.status(400).json("!!" + error);
    res.status(200).json({ message: "Noticia eliminada con éxito" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
