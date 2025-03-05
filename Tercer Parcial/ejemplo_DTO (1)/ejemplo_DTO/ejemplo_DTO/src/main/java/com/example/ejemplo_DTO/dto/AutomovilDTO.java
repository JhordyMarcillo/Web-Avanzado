package com.example.ejemplo_DTO.dto;

public class AutomovilDTO {
    private Long id;
    private String modelo;
    private double valor;
    private int accidentes;
    private String propietarioNombreCompleto;
    private double costoSeguro;

    //constructor

    public AutomovilDTO(Long id, String modelo, double valor, int accidentes, String propietarioNombreCompleto, double costoSeguro) {
        this.id = id;
        this.modelo = modelo;
        this.valor = valor;
        this.accidentes = accidentes;
        this.propietarioNombreCompleto = propietarioNombreCompleto;
        this.costoSeguro = costoSeguro;
    }

    //getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getAccidentes() {
        return accidentes;
    }

    public void setAccidentes(int accidentes) {
        this.accidentes = accidentes;
    }

    public String getPropietarioNombreCompleto() {
        return propietarioNombreCompleto;
    }

    public void setPropietarioNombreCompleto(String propietarioNombreCompleto) {
        this.propietarioNombreCompleto = propietarioNombreCompleto;
    }

    public double getCostoSeguro() {
        return costoSeguro;
    }

    public void setCostoSeguro(double costoSeguro) {
        this.costoSeguro = costoSeguro;
    }
}
