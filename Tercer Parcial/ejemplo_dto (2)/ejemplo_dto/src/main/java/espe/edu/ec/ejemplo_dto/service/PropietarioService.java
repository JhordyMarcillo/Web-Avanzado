package espe.edu.ec.ejemplo_dto.service;

import espe.edu.ec.ejemplo_dto.dto.PropietarioDTO;
import espe.edu.ec.ejemplo_dto.model.Propietario;
import espe.edu.ec.ejemplo_dto.repository.PropietarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PropietarioService {
    private final PropietarioRepository propietarioRepository;

    public PropietarioService(PropietarioRepository propietarioRepository) {
        this.propietarioRepository = propietarioRepository;
    }

    public List<PropietarioDTO> obtenerTodos() {
        return propietarioRepository.findAll().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    public PropietarioDTO obtenerPorId(Long id) {
        Propietario propietario = propietarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Propietario no encontrado"));
        return convertirADTO(propietario);
    }

    @Transactional
    public PropietarioDTO crear(PropietarioDTO propietarioDTO) {
        Propietario propietario = new Propietario();
        String[] nombres = propietarioDTO.getNombreCompleto().split(" ", 2);
        propietario.setNombre(nombres[0]);
        propietario.setApellido(nombres.length > 1 ? nombres[1] : "");
        propietario.setEdad(propietarioDTO.getEdad());

        propietarioRepository.save(propietario);
        return convertirADTO(propietario);
    }

    @Transactional
    public PropietarioDTO modificar(Long id, PropietarioDTO propietarioDTO) {
        Propietario propietario = propietarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Propietario no encontrado"));

        String[] nombres = propietarioDTO.getNombreCompleto().split(" ", 2);
        propietario.setNombre(nombres[0]);
        propietario.setApellido(nombres.length > 1 ? nombres[1] : "");
        propietario.setEdad(propietarioDTO.getEdad());

        propietarioRepository.save(propietario);
        return convertirADTO(propietario);
    }

    @Transactional
    public void eliminar(Long id) {
        if (!propietarioRepository.existsById(id)) {
            throw new RuntimeException("Propietario no encontrado");
        }
        propietarioRepository.deleteById(id);
    }

    private PropietarioDTO convertirADTO(Propietario propietario) {
        return new PropietarioDTO(
            propietario.getId(),
            propietario.getNombre() + " " + propietario.getApellido(),
            propietario.getEdad(),
            List.of() 
        );
    }
}
