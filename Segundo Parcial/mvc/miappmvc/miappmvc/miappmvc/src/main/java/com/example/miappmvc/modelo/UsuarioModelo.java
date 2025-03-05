package com.example.miappmvc.modelo;

public class UsuarioModelo{
    private String nombre;
    private int edad;

    //constructor

    public UsuarioModelo(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public int getEdad(){
        return edad;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }
}