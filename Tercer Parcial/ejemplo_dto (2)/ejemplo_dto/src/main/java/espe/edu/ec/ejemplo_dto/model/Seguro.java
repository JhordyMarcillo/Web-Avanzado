package espe.edu.ec.ejemplo_dto.model;

import jakarta.persistence.*;

@Entity
@Table(name = "seguro")
public class Seguro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "costo_total")
    private double costoTotal;

    @OneToOne
    @JoinColumn(name = "automovil_id", nullable = false, unique = true)
    private Automovil automovil;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getCostoTotal() {
        return costoTotal;
    }

    public void setCostoTotal(double costoTotal) {
        this.costoTotal = costoTotal;
    }

    public Automovil getAutomovil() {
        return automovil;
    }

    public void setAutomovil(Automovil automovil) {
        this.automovil = automovil;
    }
}
//     public Seguro getSeguro() {