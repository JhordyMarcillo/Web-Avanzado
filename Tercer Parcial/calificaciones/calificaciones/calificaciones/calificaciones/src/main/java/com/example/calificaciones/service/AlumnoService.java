package com.example.calificaciones.service;

import com.example.calificaciones.model.Alumno;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlumnoService {
    private List<Alumno> alumnos = new ArrayList<>();
    private int idCounter =1;
    //metodo obetener todos los alumnos
    public List<Alumno> obtenerTodos() {
        return alumnos;
    }

    public Alumno ObtenerPorId(int id) {
        return alumnos.stream().filter(a-> a.getId()== id).findFirst().orElse(null);
    }

    //agregar el alumno
    public void agregarAlumno(Alumno alumno) {
        alumno.setId(idCounter++);
        alumnos.add(alumno);
    }

    //actualizar la nota
    public void actualizarNota(int id, double nuevaNota) {
        Alumno alumno = ObtenerPorId(id);
        if (alumno != null) {
            alumno.setNota(nuevaNota);
        }
    }

    //eliminar alumno
    public void eliminarAlumno(int id) {
        alumnos.removeIf( a -> a.getId() == id);
    }
}
