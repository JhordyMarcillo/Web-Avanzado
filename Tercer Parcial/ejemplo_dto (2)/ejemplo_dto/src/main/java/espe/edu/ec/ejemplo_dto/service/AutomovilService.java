package espe.edu.ec.ejemplo_dto.service;

import espe.edu.ec.ejemplo_dto.dto.AutomovilDTO;
import espe.edu.ec.ejemplo_dto.model.Automovil;
import espe.edu.ec.ejemplo_dto.model.Propietario;
import espe.edu.ec.ejemplo_dto.repository.AutomovilRepository;
import espe.edu.ec.ejemplo_dto.repository.PropietarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AutomovilService {
    private final AutomovilRepository automovilRepository;
    private final PropietarioRepository propietarioRepository;

    public AutomovilService(AutomovilRepository automovilRepository, PropietarioRepository propietarioRepository) {
        this.automovilRepository = automovilRepository;
        this.propietarioRepository = propietarioRepository;
    }

    public List<AutomovilDTO> obtenerTodos() {
        return automovilRepository.findAll().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    public AutomovilDTO obtenerPorId(Long id) {
        Automovil automovil = automovilRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Automóvil no encontrado"));
        return convertirADTO(automovil);
    }

    @Transactional
    public AutomovilDTO crear(AutomovilDTO automovilDTO) {
        Propietario propietario = propietarioRepository.findById(automovilDTO.getPropietarioId())
                .orElseThrow(() -> new RuntimeException("Propietario no encontrado"));

        Automovil automovil = new Automovil();
        automovil.setModelo(automovilDTO.getModelo());
        automovil.setValor(automovilDTO.getValor());
        automovil.setAccidentes(automovilDTO.getAccidentes());
        automovil.setPropietario(propietario);

        automovilRepository.save(automovil);
        return convertirADTO(automovil);
    }

    @Transactional
    public AutomovilDTO modificar(Long id, AutomovilDTO automovilDTO) {
        Automovil automovil = automovilRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Automóvil no encontrado"));

        automovil.setModelo(automovilDTO.getModelo());
        automovil.setValor(automovilDTO.getValor());
        automovil.setAccidentes(automovilDTO.getAccidentes());

        automovilRepository.save(automovil);
        return convertirADTO(automovil);
    }

    @Transactional
    public void eliminar(Long id) {
        if (!automovilRepository.existsById(id)) {
            throw new RuntimeException("Automóvil no encontrado");
        }
        automovilRepository.deleteById(id);
    }

    private AutomovilDTO convertirADTO(Automovil automovil) {
        return new AutomovilDTO(
            automovil.getId(),
            automovil.getModelo(),
            automovil.getValor(),
            automovil.getAccidentes(),
            automovil.getPropietario() != null 
                ? automovil.getPropietario().getNombre() + " " + automovil.getPropietario().getApellido()
                : "Sin propietario",
            (automovil.getSeguro() != null ? automovil.getSeguro().getCostoTotal() : 0.0),
            automovil.getPropietario() != null ? automovil.getPropietario().getId() : null
        );
    }
    
}
