package com.example.Base_Calificaciones.model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table (name = "estudiante")

public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String email;

    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;

    //relaciones

    //estudiantes tiene muchas notas
    @OneToMany (mappedBy = "estudiante", cascade = CascadeType.ALL)
    private List<Nota> notas;

    //constructor vacio

    public Estudiante() {
    }

    public Estudiante(Long id, String nombre, String apellido, String email, Date fechaNacimiento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fechaNacimiento = fechaNacimiento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public List<Nota> getNotas() {
        return notas;
    }

    public void setNotas(List<Nota> notas) {
        this.notas = notas;
    }
}

