package espe.edu.ec.ejemplo_dto.controller;

import espe.edu.ec.ejemplo_dto.dto.SeguroDTO;
import espe.edu.ec.ejemplo_dto.service.SeguroService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seguros")
public class SeguroController {

    private final SeguroService seguroService;

    public SeguroController(SeguroService seguroService) {
        this.seguroService = seguroService;
    }

    @PostMapping("/generar/{automovilId}")
    public ResponseEntity<SeguroDTO> generarSeguro(@PathVariable Long automovilId) {
        return ResponseEntity.status(HttpStatus.CREATED).body(seguroService.generarSeguro(automovilId));
    }

    @GetMapping
    public ResponseEntity<List<SeguroDTO>> obtenerTodos() {
        return ResponseEntity.ok(seguroService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SeguroDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(seguroService.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<SeguroDTO> crear(@RequestBody SeguroDTO seguroDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(seguroService.crear(seguroDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SeguroDTO> modificar(@PathVariable Long id, @RequestBody SeguroDTO seguroDTO) {
        return ResponseEntity.ok(seguroService.modificar(id, seguroDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        seguroService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
