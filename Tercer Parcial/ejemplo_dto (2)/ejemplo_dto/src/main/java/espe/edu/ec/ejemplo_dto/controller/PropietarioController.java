package espe.edu.ec.ejemplo_dto.controller;

import espe.edu.ec.ejemplo_dto.dto.PropietarioDTO;
import espe.edu.ec.ejemplo_dto.service.PropietarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/propietarios")
public class PropietarioController {

    private final PropietarioService propietarioService;

    public PropietarioController(PropietarioService propietarioService) {
        this.propietarioService = propietarioService;
    }

    @GetMapping
    public ResponseEntity<List<PropietarioDTO>> obtenerTodos() {
        return ResponseEntity.ok(propietarioService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PropietarioDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(propietarioService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<PropietarioDTO> crear(@RequestBody PropietarioDTO propietarioDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(propietarioService.crear(propietarioDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PropietarioDTO> modificar(@PathVariable Long id, @RequestBody PropietarioDTO propietarioDTO) {
        return ResponseEntity.ok(propietarioService.modificar(id, propietarioDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        propietarioService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
