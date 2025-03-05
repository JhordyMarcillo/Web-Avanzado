package espe.edu.ec.ejemplo_dto.dto;

import java.util.List;

public class PropietarioDTO {
    private Long id;
    private String nombreCompleto;
    private int edad;
    private List<Long> automovilesIds;

    public PropietarioDTO(Long id, String nombreCompleto, int edad, List<Long> automovilesIds) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.automovilesIds = automovilesIds;
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
