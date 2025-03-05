package com.example.ejemplo_DTO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.ejemplo_DTO.model")
public class EjemploDtoApplication {

	public static void main(String[] args) {
		SpringApplication.run(EjemploDtoApplication.class, args);
	}

}
