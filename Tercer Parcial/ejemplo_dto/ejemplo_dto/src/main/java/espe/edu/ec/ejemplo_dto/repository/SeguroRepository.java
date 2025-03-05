package espe.edu.ec.ejemplo_dto.repository;

import espe.edu.ec.ejemplo_dto.model.Seguro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeguroRepository extends JpaRepository<Seguro, Long> {
}
