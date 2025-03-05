package com.example.Base_Calificaciones.service;


import com.example.Base_Calificaciones.model.Estudiante;
import com.example.Base_Calificaciones.model.Nota;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EstudianteService {

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
    public List<Estudiante> filtrarPorNotas(double min, double max) {
        return cargarEstudiantes().stream()
                .filter(est -> est.getNotas().stream()
                        .anyMatch(nota -> nota.getNota() >= min && nota.getNota() <= max))
                .collect(Collectors.toList());
    }

    // Ordenar alumnos por nota de mayor a menor
    public List<Estudiante> ordenarPorNotaDesc() {
        return cargarEstudiantes().stream()
                .sorted((e1, e2) -> Double.compare(
                        e2.getNotas().stream().mapToDouble(Nota::getNota).average().orElse(0),
                        e1.getNotas().stream().mapToDouble(Nota::getNota).average().orElse(0)))
                .collect(Collectors.toList());
    }
}

