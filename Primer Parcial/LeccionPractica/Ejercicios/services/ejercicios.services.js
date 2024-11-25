const EjercicioRepository = require('../repositories/ejercicios.repository');

class EjercicioService {
  async obtenerTodas() {
    return await EjercicioRepository.obtenerTodos();
  }

  async crear(reserva) {
    return await EjercicioRepository.crear(reserva);
  }

  async obtenerPorId(id) {
    return await EjercicioRepository.obtenerPorId(id);
  }

  async actualizar(id, datos) {
    return await EjercicioRepository.actualizar(id, datos);
  }

  async eliminar(id) {
    return await EjercicioRepository.eliminar(id);
  }
}

module.exports = new EjercicioService();
