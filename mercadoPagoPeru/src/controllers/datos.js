import { Datos } from '../models/datos.js';


export const registrarDatos = async (req, res) => {
    const {
      Nombre,
      telefono,
      pais
    } = req.body;
  
    try {
      // Crear el nuevo registro de datos
      const datos = await Datos.create({
        Nombre,
        telefono,
        pais
      });
  
      res.status(200).json({
        message: "Datos registrados con éxito",
        datos: datos,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Problemas al registrar los datos",
        message: err.message || err,
      });
    }
}
