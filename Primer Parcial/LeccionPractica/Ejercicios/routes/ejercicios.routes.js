const express = require('express');
const EjercicioController = require('../controllers/ejercicios.controller');
const router = express.Router();

// Definir rutas sin la base '/ejercicios'
router.get('/', EjercicioController.obtenerTodas);           // GET /api/ejercicios
router.post('/', EjercicioController.crear);                 // POST /api/ejercicios
router.get('/:id', EjercicioController.obtenerPorId);        // GET /api/ejercicios/:id
router.put('/:id', EjercicioController.actualizar);          // PUT /api/ejercicios/:id
router.delete('/:id', EjercicioController.eliminar);         // DELETE /api/ejercicios/:id

module.exports = router;
