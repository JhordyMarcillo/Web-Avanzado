package com.example.Base_Calificaciones.controller;

import com.example.Base_Calificaciones.model.Estudiante;
import com.example.Base_Calificaciones.model.Nota;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RestController
@RequestMapping("/estudiantes")
public class EstudianteController {
    private final String FILE_PATH = "estudiantes.json";
    private ObjectMapper objectMapper = new ObjectMapper();

    // Guardar estudiantes en JSON
    public void guardarEstudiantes(List<Estudiante> estudiantes) {
        try {
            objectMapper.writeValue(new File(FILE_PATH), estudiantes);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Cargar estudiantes desde JSON
    public List<Estudiante> cargarEstudiantes() {
        try {
            File file = new File(FILE_PATH);
            if (!file.exists()) return List.of();
            return objectMapper.readValue(file, new TypeReference<List<Estudiante>>() {});
        } catch (IOException e) {
            e.printStackTrace();
            return List.of();
        }
    }

    // Filtrar por nota mínima y máxima
    @GetMapping("/filtrar")
    public ResponseEntity<List<Estudiante>> filtrarPorNotas(@RequestParam double min, @RequestParam double max) {
        return ResponseEntity.ok(cargarEstudiantes().stream()
                .filter(est -> est.getNotas().stream()
                        .anyMatch(nota -> nota.getNota() >= min && nota.getNota() <= max))
                .collect(Collectors.toList()));
    }

    // Ordenar alumnos por nota de mayor a menor
    @GetMapping("/ordenar")
    public ResponseEntity<List<Estudiante>> ordenarPorNotaDesc() {
        return ResponseEntity.ok(cargarEstudiantes().stream()
                .sorted((e1, e2) -> Double.compare(
                        e2.getNotas().stream().mapToDouble(Nota::getNota).average().orElse(0),
                        e1.getNotas().stream().mapToDouble(Nota::getNota).average().orElse(0)))
                .collect(Collectors.toList()));
    }

    @GetMapping("/exportar")
    public ResponseEntity<byte[]> exportarCSV() {
        List<Estudiante> estudiantes = cargarEstudiantes();
        StringBuilder csvData = new StringBuilder("ID,Nombre,Apellido,Email,FechaNacimiento,Nota\n");
        for (Estudiante est : estudiantes) {
            for (Nota nota : est.getNotas()) {
                csvData.append(est.getId()).append(",")
                        .append(est.getNombre()).append(",")
                        .append(est.getApellido()).append(",")
                        .append(est.getEmail()).append(",")
                        .append(est.getFechaNacimiento()).append(",")
                        .append(nota.getNota()).append("\n");
            }
        }
        byte[] csvBytes = csvData.toString().getBytes();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_PLAIN);
        headers.setContentDispositionFormData("filename", "estudiantes.csv");
        return new ResponseEntity<>(csvBytes, headers, HttpStatus.OK);
    }

    @GetMapping("/form")
    public String mostrarFormulario(Model model) {
        model.addAttribute("estudiante", new Estudiante());
        return "formulario";
    }

    // Guardar estudiante desde formulario
    @PostMapping("/guardar")
    public String guardarEstudiante(@ModelAttribute Estudiante estudiante) {
        List<Estudiante> estudiantes = cargarEstudiantes();
        estudiantes.add(estudiante);
        guardarEstudiantes(estudiantes);
        return "redirect:/estudiantes/lista";
    }

    // Mostrar lista de estudiantes
    @GetMapping("/lista")
    public String listarEstudiantes(Model model) {
        model.addAttribute("estudiantes", cargarEstudiantes());
        return "lista";
    }
}

