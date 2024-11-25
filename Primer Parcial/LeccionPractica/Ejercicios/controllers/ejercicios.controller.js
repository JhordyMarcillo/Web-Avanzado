const EjercicioService = require('../services/ejercicios.services.js');

class EjercicioController {
  async obtenerTodas(req, res) {
    const ejercicios = await EjercicioService.obtenerTodas();
    res.json(ejercicios);
  }

  async crear(req, res) {
    const nuevaReserva = req.body;
    const id = await EjercicioService.crear(nuevaReserva);
    res.status(201).json({ id, ...nuevaReserva });
  }

  async obtenerPorId(req, res) {
    const ejercicios = await EjercicioService.obtenerPorId(req.params.id);
    if (!ejercicios) {
      return res.status(404).json({ mensaje: 'Ejercicio no encontrado' });
    }
    res.json(ejercicios);
  }

  async actualizar(req, res) {
    await EjercicioService.actualizar(req.params.id, req.body);
    res.json({ mensaje: 'Ejercicio actualizado' });
  }

  async eliminar(req, res) {
    await EjercicioService.eliminar(req.params.id);
    res.json({ mensaje: 'Ejercicio eliminado' });
  }
}

module.exports = new EjercicioController();
