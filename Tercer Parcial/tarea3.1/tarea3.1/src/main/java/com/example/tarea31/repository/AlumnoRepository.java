package com.example.tarea31.repository;

import com.example.tarea31.model.Alumno;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class AlumnoRepository {

    private static final String FILE_PATH = "alumnos.json";
    private ObjectMapper objectMapper = new ObjectMapper();

    public List<Alumno> findAll() throws IOException {
        File file = new File(FILE_PATH);
        if (!file.exists()) {
            file.createNewFile();
            objectMapper.writeValue(file, new Alumno[0]);
        }
        Alumno[] alumnos = objectMapper.readValue(file, Alumno[].class);
        return new ArrayList<>(Arrays.asList(alumnos)); // lista mutable
    }

    public void saveAll(List<Alumno> alumnos) throws IOException {
        File file = new File(FILE_PATH);
        objectMapper.writeValue(file, alumnos);
    }

}
