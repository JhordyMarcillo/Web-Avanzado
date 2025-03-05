package com.example.ejemplo_DTO.repository;

import com.example.ejemplo_DTO.model.Seguro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeguroRepository extends JpaRepository<Seguro, Long> {
}
