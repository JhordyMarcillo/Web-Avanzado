package com.example.back_bdd_2.controller;

import com.example.back_bdd_2.model.Estudiante;
import com.example.back_bdd_2.service.EstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.view.ViewScoped;
import java.io.Serializable;
import java.util.List;

@Component
@ViewScoped
public class EstudianteController implements Serializable {

    @Autowired
    private EstudianteService estudianteService;

    private List<Estudiante> estudiantes;
    private Estudiante estudianteSeleccionado = new Estudiante();

    public List<Estudiante> getEstudiantes() {
        if (estudiantes == null) {
            estudiantes = estudianteService.obtenerTodos();
        }
        return estudiantes;
    }

    public Estudiante getEstudianteSeleccionado() {
        return estudianteSeleccionado;
    }

    public void setEstudianteSeleccionado(Estudiante estudianteSeleccionado) {
        this.estudianteSeleccionado = estudianteSeleccionado;
    }

    public void guardarEstudiante() {
        estudianteService.guardar(estudianteSeleccionado);
        estudiantes = null; // Refrescar la lista
        estudianteSeleccionado = new Estudiante(); // Limpiar el formulario
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Estudiante guardado con éxito"));
    }

    public void eliminarEstudiante() {
        estudianteService.eliminar(estudianteSeleccionado.getId());
        estudiantes = null; // Refrescar la lista
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Estudiante eliminado con éxito"));
    }
}