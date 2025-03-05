package com.example.ejemplo_DTO.dto;

import java.util.List;

public class PropietarioDTO {
    private Long id;
    private String nombreCompleto;
    private int edad;

    private List<Long> automovilesIds;

    //constructores personalizados

    public PropietarioDTO(List<Long> automovilesIds, int edad, Long id, String nombreCompleto) {
        this.automovilesIds = automovilesIds;
        this.edad = edad;
        this.id = id;
        this.nombreCompleto = nombreCompleto;
    }

    //getters y setters

    public PropietarioDTO(Long id, String nombre, String apellido, int edad, Object o) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public List<Long> getAutomovilesIds() {
        return automovilesIds;
    }

    public void setAutomovilesIds(List<Long> automovilesIds) {
        this.automovilesIds = automovilesIds;
    }
}
