package com.example.calificaciones.model;

public class Alumno {
    private int id;
    private String nombre;
    private double nota;
    private String calificacion;

    public Alumno() {

    }

    public Alumno(int id, String nombre, double nota, String calificacion) {
        this.id = id;
        this.nombre = nombre;
        this.nota = nota;
        this.calificacion = calificacion;
    }


    //metodos de acceso
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    //metodo para la nota

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
        this.calificacion = calcularCalificacion(nota);
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }


    


}
