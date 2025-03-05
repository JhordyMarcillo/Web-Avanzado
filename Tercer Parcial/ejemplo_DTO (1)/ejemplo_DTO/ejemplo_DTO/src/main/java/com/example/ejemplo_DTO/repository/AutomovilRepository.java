package com.example.ejemplo_DTO.repository;

import com.example.ejemplo_DTO.model.Automovil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutomovilRepository extends JpaRepository<Automovil, Long> {
}
