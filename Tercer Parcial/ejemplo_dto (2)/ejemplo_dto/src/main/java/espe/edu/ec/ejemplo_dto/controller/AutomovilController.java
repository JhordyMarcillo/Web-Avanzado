package espe.edu.ec.ejemplo_dto.controller;

import espe.edu.ec.ejemplo_dto.dto.AutomovilDTO;
import espe.edu.ec.ejemplo_dto.service.AutomovilService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/automoviles")
public class AutomovilController {

    private final AutomovilService automovilService;

    public AutomovilController(AutomovilService automovilService) {
        this.automovilService = automovilService;
    }

    @GetMapping
    public ResponseEntity<List<AutomovilDTO>> obtenerTodos() {
        return ResponseEntity.ok(automovilService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AutomovilDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(automovilService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<AutomovilDTO> crear(@RequestBody AutomovilDTO automovilDTO) {
        AutomovilDTO nuevoAutomovil = automovilService.crear(automovilDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoAutomovil);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AutomovilDTO> modificar(@PathVariable Long id, @RequestBody AutomovilDTO automovilDTO) {
        return ResponseEntity.ok(automovilService.modificar(id, automovilDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        automovilService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
