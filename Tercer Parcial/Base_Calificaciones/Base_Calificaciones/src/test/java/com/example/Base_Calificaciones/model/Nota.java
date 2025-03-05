package com.example.Base_Calificaciones.model;


import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "notas")
public class Nota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String asignatura;
    private Double nota;

    @Temporal(TemporalType.DATE)
    private Date fecha_registro = new Date();

    //relaciones entre tablas
    @ManyToOne
    @JoinColumn(name = "id_estudiante")
    private Estudiante estudiante;


    //constructores
    public Nota() {
    }

    public Nota(Long id, String asignatura, Double nota, Date fecha_registro, Estudiante estudiante) {
        this.id = id;
        this.asignatura = asignatura;
        this.nota = nota;
        this.fecha_registro = fecha_registro;
        this.estudiante = estudiante;
    }

    //metodo de calificacione
    private String calcularCalificacion(double nota) {
        if (nota >= 9 && nota <= 10) {
            return "Sobresaliente";
        } else if (nota >= 7 && nota < 9) {
            return "Notable";
        } else if (nota >= 5 && nota < 7) {
            return "Bien";
        } else if (nota >= 0 && nota < 5) {
            return "Suspenso";
        } else {
            return "Nota inválida";
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public Date getFecha_registro() {
        return fecha_registro;
    }

    public void setFecha_registro(Date fecha_registro) {
        this.fecha_registro = fecha_registro;
    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }
}
