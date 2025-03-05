package com.example.ejemplo_DTO.service;

import com.example.ejemplo_DTO.dto.AutomovilDTO;
import com.example.ejemplo_DTO.model.Automovil;
import com.example.ejemplo_DTO.repository.AutomovilRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AutomovilService {
    private final AutomovilRepository automovilRepository;

    public AutomovilService(AutomovilRepository automovilRepository) {
        this.automovilRepository = automovilRepository;
    }

    /**
     * Obtener todos los automóviles
     */
    public List<AutomovilDTO> obtenerTodos() {
        return automovilRepository.findAll().stream()
                .map(automovil -> new AutomovilDTO(
                        automovil.getId(),
                        automovil.getModelo(),
                        automovil.getValor(),
                        automovil.getAccidentes(),
                        automovil.getPropietario().getNombre() + " " + automovil.getPropietario().getApellido(),
                        (automovil.getSeguro() != null ? automovil.getSeguro().getCostoTotal() : 0.0)
                ))
                .collect(Collectors.toList());
    }

    /**
     * Obtener automóvil por ID
     */
    public AutomovilDTO obtenerPorId(Long id) {
        Automovil automovil = automovilRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Automóvil no encontrado"));

        return new AutomovilDTO(
                automovil.getId(),
                automovil.getModelo(),
                automovil.getValor(),
                automovil.getAccidentes(),
                automovil.getPropietario().getNombre() + " " + automovil.getPropietario().getApellido(),
                (automovil.getSeguro() != null ? automovil.getSeguro().getCostoTotal() : 0.0)
        );
    }

    /**
     * Crear un nuevo automóvil
     */
    public AutomovilDTO crear(AutomovilDTO automovilDTO) {
        Automovil automovil = new Automovil();
        automovil.setModelo(automovilDTO.getModelo());
        automovil.setValor(automovilDTO.getValor());
        automovil.setAccidentes(automovilDTO.getAccidentes());
        automovilRepository.save(automovil);

        return obtenerPorId(automovil.getId());
    }

    /**
     * Modificar un automóvil existente
     */
    public AutomovilDTO modificar(Long id, AutomovilDTO automovilDTO) {
        Automovil automovil = automovilRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Automóvil no encontrado"));

        automovil.setModelo(automovilDTO.getModelo());
        automovil.setValor(automovilDTO.getValor());
        automovil.setAccidentes(automovilDTO.getAccidentes());
        automovilRepository.save(automovil);

        return obtenerPorId(automovil.getId());
    }

    /**
     * Eliminar un automóvil por ID
     */
    public void eliminar(Long id) {
        automovilRepository.deleteById(id);
    }
}
