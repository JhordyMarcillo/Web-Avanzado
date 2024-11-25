const db = require('../config/db.js');

class EjercicioRepository {
  // Obtener todos los ejercicios
  async obtenerTodos() {
    const [ejercicios] = await db.query('SELECT * FROM ejercicios');
    return ejercicios;
  }

  // Crear un nuevo ejercicio
  async crear(ejercicios) {
    const [resultado] = await db.query('INSERT INTO ejercicios SET ?', ejercicios);
    return resultado.insertId;
  }

  // Obtener un ejercicio por su ID
  async obtenerPorId(id) {
    const [ejercicios] = await db.query('SELECT * FROM ejercicios WHERE id = ?', [id]);
    return ejercicios[0];
  }

  // Actualizar un ejercicio existente
  async actualizar(id, datos) {
    await db.query('UPDATE ejercicios SET ? WHERE id = ?', [datos, id]);
  }

  // Eliminar un ejercicio por su ID
  async eliminar(id) {
    await db.query('DELETE FROM ejercicios WHERE id = ?', [id]);
  }
}

module.exports = new EjercicioRepository();
