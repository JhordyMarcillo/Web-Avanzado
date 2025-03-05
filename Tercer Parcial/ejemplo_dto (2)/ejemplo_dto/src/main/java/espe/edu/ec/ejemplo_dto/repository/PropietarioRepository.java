package espe.edu.ec.ejemplo_dto.repository;

import espe.edu.ec.ejemplo_dto.model.Propietario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropietarioRepository extends JpaRepository<Propietario, Long> {
}
