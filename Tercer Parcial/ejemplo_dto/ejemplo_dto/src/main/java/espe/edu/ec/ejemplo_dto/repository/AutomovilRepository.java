package espe.edu.ec.ejemplo_dto.repository;

import espe.edu.ec.ejemplo_dto.model.Automovil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutomovilRepository extends JpaRepository<Automovil, Long> {
}
